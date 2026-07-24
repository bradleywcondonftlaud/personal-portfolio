const QUERY = `
  SELECT
    Id,
    CaseNumber,
    Subject,
    Status,
    Priority,
    Public_Summary__c,
    Project_URL__c,
    Project_Image_URL__c
  FROM Case
  WHERE RecordType.DeveloperName = 'Salesforce_Project'
    AND Show_On_Portfolio__c = TRUE
  ORDER BY LastModifiedDate DESC
  LIMIT 100
`;

export default async function handler(request, response) {
  if (request.method !== 'GET') {
    return response.status(405).json({
      error: 'Method not allowed',
    });
  }

  try {
    /*
     * Vercel compiles this function as CommonJS, while
     * @vercel/connect is an ES module. A dynamic import
     * prevents the ERR_REQUIRE_ESM runtime error.
     */
    const { getTokenResponse } = await import('@vercel/connect');

    const tokenResponse = await getTokenResponse(
      'salesforce/the-dreamin-roomie-connect',
      {
        subject: {
          type: 'app',
        },
      }
    );

    const metadata = tokenResponse.metadata || {};
    const claims = tokenResponse.claims || {};

    /*
     * Salesforce access tokens are valid only for the org instance
     * that issued them. Prefer the instance URL saved alongside the
     * connector authorization so the URL and token cannot drift apart.
     */
    const connectorInstanceUrl = [
      metadata.instance_url,
      metadata.instanceUrl,
      metadata.instanceURL,
      claims.instance_url,
      claims.instanceUrl,
    ].find(
      (value) =>
        typeof value === 'string' &&
        value.trim().length > 0
    );

    const instanceUrl =
      connectorInstanceUrl ||
      process.env.SALESFORCE_INSTANCE_URL;

    if (!instanceUrl) {
      throw new Error(
        'The Salesforce connector did not provide an instance URL and SALESFORCE_INSTANCE_URL is not configured'
      );
    }

    const salesforceUrl = new URL(
      '/services/data/v67.0/query',
      instanceUrl
    );

    salesforceUrl.searchParams.set(
      'q',
      QUERY.replace(/\s+/g, ' ').trim()
    );

    const salesforceResponse = await fetch(salesforceUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${tokenResponse.token}`,
        Accept: 'application/json',
      },
    });

    if (!salesforceResponse.ok) {
      const errorDetails = await salesforceResponse.text();

      throw new Error(
        `Salesforce returned ${salesforceResponse.status}: ${errorDetails}; connector=${tokenResponse.connector.uid}; instanceSource=${
          connectorInstanceUrl ? 'connector' : 'environment'
        }; metadataKeys=${Object.keys(metadata).join(',') || 'none'}; claimKeys=${
          Object.keys(claims).join(',') || 'none'
        }`
      );
    }

    const data = await salesforceResponse.json();

    const records = Array.isArray(data.records)
      ? data.records
      : [];

    const projects = records.map((record) => ({
      id: record.Id,
      number: record.CaseNumber,
      title: record.Subject,
      status: record.Status,
      priority: record.Priority,
      summary: record.Public_Summary__c || '',
      url: record.Project_URL__c || '',
      imageUrl: record.Project_Image_URL__c || '',
    }));

    /*
     * Cache the public project data for five minutes.
     * Stale content can be used while Vercel refreshes it.
     */
    response.setHeader(
      'Cache-Control',
      'public, s-maxage=300, stale-while-revalidate=3600'
    );

    return response.status(200).json({
      projects,
    });
  } catch (error) {
    console.error('Unable to load Salesforce projects:', {
      message:
        error instanceof Error
          ? error.message
          : String(error),
      stack:
        error instanceof Error
          ? error.stack
          : undefined,
    });

    return response.status(500).json({
      error: 'Projects are temporarily unavailable',
    });
  }
}
