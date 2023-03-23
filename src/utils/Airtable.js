import Airtable from 'airtable';

/**
 * Airtable connection
 */
const base = new Airtable({ apiKey: process.env.NEXT_AIRTABLE_API_KEY })
    .base(
        process.env.NEXT_AIRTABLE_BASE_ID
    );

// Airtable Base Tables
const airtableItems = base('Items');
const airtableUsers = base('Users');

/**
 * Get minified single record response
 * 
 * @param {Object} record 
 * @returns Object
 */
const singleRecordResponse = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

export { airtableItems, airtableUsers, singleRecordResponse };