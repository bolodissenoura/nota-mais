import {
  CreateLeadParams,
  ICreateLeadRepository,
} from "../../controllers/create-lead/protocols";
import { Lead } from "../../models/leads";

import { MongoClient } from "../../database/mongo";

export class MongoCreateLead implements ICreateLeadRepository {
  async createLead(params: CreateLeadParams): Promise<Lead> {
    const { insertedId } = await MongoClient.db
      .collection("leads")
      .insertOne(params);

    const lead = await MongoClient.db
      .collection<Omit<Lead, "id">>("leads")
      .findOne({
        _id: insertedId,
      });

    if (!lead) {
      throw new Error("Lead not saved");
    }

    const { _id, ...rest } = lead;

    return { id: _id.toHexString(), ...rest };
  }
}
