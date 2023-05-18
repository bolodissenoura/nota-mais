import { Lead } from "../../models/leads";
import { HttpResponse, HttpRequest } from "../protocols";
import {
  CreateLeadParams,
  ICreateLeadController,
  ICreateLeadRepository,
} from "./protocols";

export class CreateLeadController implements ICreateLeadController {
  constructor(private readonly createLeadRepository: ICreateLeadRepository) {}
  async handle(
    httpRequest: HttpRequest<CreateLeadParams>
  ): Promise<HttpResponse<Lead>> {
    try {
      // const requiredFields = ["name", "email", "phone"];
      if (!httpRequest.body) {
        return {
          statusCode: 400,
          body: "Please specify a body",
        };
      }
      const lead = await this.createLeadRepository.createLead(httpRequest.body);

      return {
        statusCode: 200,
        body: lead,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong.",
      };
    }
  }
}
