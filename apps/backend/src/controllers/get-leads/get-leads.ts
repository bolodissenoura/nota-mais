import { IGetLeadsController, IGetLeadsRepository } from "./protocols";

export class GetLeadsController implements IGetLeadsController {
  constructor(private readonly getLeadsRepository: IGetLeadsRepository) {}
  async handle() {
    try {
      const leads = await this.getLeadsRepository.getUser();
      return {
        statusCode: 200,
        body: leads,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong.",
      };
    }
  }
}
