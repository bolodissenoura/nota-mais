/* eslint-disable turbo/no-undeclared-env-vars */
import express from "express";
import { config } from "dotenv";
import { MongoGetLeadsRepository } from "./repositories/get-leads/mongo-get-leads";
import { MongoCreateLeadRepository } from "./repositories/create-lead/mongo-create-user";
import { GetLeadsController } from "./controllers/get-leads/get-leads";
import { CreateLeadController } from "./controllers/create-lead/create-lead";
import { MongoClient } from "./database/mongo";

const main = async () => {
  config();
  await MongoClient.connect();
  const app = express();

  app.use(express.json());

  app.get("/leads", async (req, res) => {
    const mongoGetLeadsRepository = new MongoGetLeadsRepository();

    const getLeadsController = new GetLeadsController(mongoGetLeadsRepository);
    const { body, statusCode } = await getLeadsController.handle();

    res.send(body).status(statusCode);
  });

  app.post("/leads", async (req, res) => {
    const mongoCreateLeadRepository = new MongoCreateLeadRepository();
    const createLeadController = new CreateLeadController(
      mongoCreateLeadRepository
    );

    const { body, statusCode } = await createLeadController.handle({
      body: req.body,
      headers: undefined
    });

    res.send(body).status(statusCode);
  });

  const port = process.env.PORT || 8000;

  app.listen(port, () => console.log(`listening on port ${port}!`));
};
main();
