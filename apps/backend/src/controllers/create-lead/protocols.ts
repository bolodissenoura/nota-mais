import { Lead } from "../../models/leads";
import { HttpRequest, HttpResponse } from "../protocols";

export interface ICreateLeadController {
  handle(
    HttpRequest: HttpRequest<CreateLeadParams>
  ): Promise<HttpResponse<Lead>>;
}

export interface CreateLeadParams {
  name: string;
  email: string;
  phone: string;
}

export interface ICreateLeadRepository {
  createLead(params: CreateLeadParams): Promise<Lead>;
}
