import { IGetLeadsRepository } from "../../controllers/get-leads/protocols";
import { MongoClient } from "../../database/mongo";
import { Lead } from "../../models/leads";

export class MongoGetLeadsRepository implements IGetLeadsRepository {
  async getLead(): Promise<Lead[]> {
    const leads = await MongoClient.db
      .collection<Omit<Lead, "id">>("leads")
      .find({})
      .toArray();

    return leads.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
}
