import { airtableUsers, singleRecordResponse } from '../../../../utils/Airtable';
import { SUCCESS, NOT_FOUND, SERVER_ERROR } from '../../../../utils/server_responses/index';

/**
 * Check and find users account
 *
 * Method: POST
 * Endpoint: /api/users/find/account_address
 *
 * @param {Request} req
 * @param {Request} res
 * 
 * @returns {Promise} user/any
 */
export default async function handler(req, res) {
	const { account_address } = req.body;

  try {
    const records = await airtableUsers
    .select(
			{
				filterByFormula: `account_address = "${account_address}"`,
			}
    ).firstPage();

    if (records.length > 0) {
      const response = singleRecordResponse(records[0]);
      res.status(200).json(SUCCESS(response));
    } else {
			res.status(200).json(NOT_FOUND);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(SERVER_ERROR);
  }
}