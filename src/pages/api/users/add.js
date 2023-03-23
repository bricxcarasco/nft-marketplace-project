import { airtableUsers, singleRecordResponse } from '../../../utils/Airtable';
import { SUCCESS, SERVER_ERROR } from '../../../utils/server_responses/index';
import UserRole from '../../../utils/constants/UsersRole';

/**
 * Add account in Users table
 *
 * Method: POST
 * Endpoint: /api/users/add
 *
 * @param {Request} req
 * @param {Request} res
 * 
 * @returns {Promise} user/any
 */
export default async function handler(req, res) {
  const { account_address } = req.body;

  try {
    const records = await airtableUsers.create([
      {
        fields: {
          account_address,
          role: UserRole.USER
        },
      },
    ]);

    const response = singleRecordResponse(records[0]);

    res.status(200).json(SUCCESS(response));
  } catch (err) {
    console.error(err);
    res.status(500).json(SERVER_ERROR);
  }
}