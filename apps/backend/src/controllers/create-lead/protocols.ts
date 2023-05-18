import { Lead } from "../../models/leads";

export interface CreateLeadParams {
  name: string;
  email: string;
  phone: string;
}

export interface ICreateLeadRepository {
  createLead(params: CreateLeadParams): Promise<Lead>;
}
