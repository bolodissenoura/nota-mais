import { IGetLeadsRepository } from "../../controllers/get-leads/protocols";
import { Lead } from "../../models/leads";

export class MongoGetLeadsRepository implements IGetLeadsRepository {
  async getUser(): Promise<Lead[]> {
    return [
      {
        name: "Daniel",
        email: "daniel@limae.com",
        phone: "12988990193",
      },
    ];
  }
}
