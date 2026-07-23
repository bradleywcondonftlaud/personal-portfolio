import { getToken } from '@vercel/connect';

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
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const token = await getToken('salesforce/portfolio-salesforce', {
      subject: { type: 'app' },
    });

    const instanceUrl = process.env.SALESFORCE_INSTANCE_URL;

    if (!instanceUrl) {
      throw new Error('SALESFORCE_INSTANCE_URL is not configured');
    }

    const url = new URL(
      '/services/data/v67.0/query',
      instanceUrl
    );

    url.searchParams.set('q', QUERY.replace(/\s+/g, ' ').trim());

    const salesforceResponse = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });

    if (!salesforceResponse.ok) {
      throw new Error(
        `Salesforce returned ${salesforceResponse.status}`
      );
    }

    const data = await salesforceResponse.json();

    const projects = data.records.map((record) => ({
      id: record.Id,
      number: record.CaseNumber,
      title: record.Subject,
      status: record.Status,
      priority: record.Priority,
      summary: record.Public_Summary__c || '',
      url: record.Project_URL__c || '',
      imageUrl: record.Project_Image_URL__c || '',
    }));

    // Prevent every portfolio visit from consuming a Salesforce API request.
    response.setHeader(
      'Cache-Control',
      'public, s-maxage=300, stale-while-revalidate=3600'
    );

    return response.status(200).json({ projects });
  } catch (error) {
    console.error('Unable to load Salesforce projects', error);
    return response.status(500).json({
      error: 'Projects are temporarily unavailable',
    });
  }
}