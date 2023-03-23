import { airtableItems, airtableUsers } from '../../utils/Airtable';
import { SUCCESS, SERVER_ERROR } from '../../utils/server_responses/index';

// Memoize the getItems function to cache results
const memoizedGetItems = (() => {
  let items = [];

  return async () => {
    if (items.length === 0) {
      items = await getItems();
    }

    return items;
  };
})();

/**
 * Get NFT items in Airtable (Method)
 *
 * Method: GET
 * Endpoint: /api/items
 *
 * @returns {Promise} items
 */
async function getItems() {
  const items = [];
  const records = [];

  // Use maxRecords and pageSize to limit the number of records fetched
  await airtableItems.select({
    view: "Grid view",
    maxRecords: 1000,
    pageSize: 100,
  }).eachPage((pageRecords, fetchNextPage) => {
    records.push(...pageRecords);
    fetchNextPage();
  });

  // Use Promise.all() to parallelize requests to the "Users" table
  const mappedRecords = await Promise.all(records.map(async (record) => {
    const item = {
      id: record.get("name"),
      address: record.get("nft_address"),
      image: record.get("image"),
      item: record.get("name"),
      owner_id: record.get('owner_id')[0],
      item_description: record.get("description"),
      opensea_link: record.get("opensea_link"),
    };

    const owner = await airtableUsers.find(item.owner_id);

    if (!owner) {
      throw new Error(`Owner ${item.owner_id} not found`);
    }

    item.owner = owner.fields.name;

    return item;
  }));

  items.push(...mappedRecords);

  return items;
}

/**
 * Get NFT items in Airtable (Handler)
 *
 * Method: GET
 * Endpoint: /api/items
 *
 * @param {Request} req
 * @param {Request} res
 * 
 * @returns {Promise} items
 */
export default async function handler (req, res) {
  try {
    // Retrieve data from Airtable using memoizedGetItems
    const items = await memoizedGetItems();

    res.status(200).json(SUCCESS(items));
  } catch (error) {
    console.error(error);
    res.status(500).json(SERVER_ERROR);
  }
};
