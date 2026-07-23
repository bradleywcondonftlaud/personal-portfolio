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
    const { getToken } = await import('@vercel/connect');

    const token = await getToken(
      'salesforce/portfolio-salesforce',
      {
        subject: {
          type: 'app',
        },
      }
    );

    const instanceUrl = process.env.SALESFORCE_INSTANCE_URL;

    if (!instanceUrl) {
      throw new Error(
        'SALESFORCE_INSTANCE_URL is not configured'
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
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });

    if (!salesforceResponse.ok) {
      const errorDetails = await salesforceResponse.text();

      throw new Error(
        `Salesforce returned ${salesforceResponse.status}: ${errorDetails}`
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