import validator from "validator";
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
      const requiredFields = ["name", "email", "phone"];
      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof CreateLeadParams]?.length){
          return {
          statusCode: 400,
          body: `Field ${field} is required`,
          };
        }
      }
      
      const emailIsValid = validator.isEmail(httpRequest?.body!.email);
      if (!emailIsValid){
        return {
          statusCode: 400,
          body: "Email is not valid",
        }
      }

      const lead = await this.createLeadRepository.createLead(httpRequest.body!);

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
