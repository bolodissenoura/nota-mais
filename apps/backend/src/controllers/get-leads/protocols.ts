import { Lead } from "../../models/leads";
import { HttpResponse } from "../protocols";

export interface IGetLeadsController {
  handle(): Promise<HttpResponse<Lead[]>>;
}

export interface IGetLeadsRepository {
  getLead(): Promise<Lead[]>;
}
