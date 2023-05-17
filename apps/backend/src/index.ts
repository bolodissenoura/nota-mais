/* eslint-disable turbo/no-undeclared-env-vars */
import express, { response } from "express";
import { config } from "dotenv";
import { MongoGetLeadsRepository } from "./repositories/get-leads/mongo-get-leads";
import { GetLeadsController } from "./controllers/get-leads/get-leads";
import { MongoClient } from "./database/mongo";

const main = async () => {
  config();
  await MongoClient.connect();
  const app = express();

  app.get("/leads", async (req, res) => {
    const mongoGetLeadsRepository = new MongoGetLeadsRepository();

    const getLeadsController = new GetLeadsController(mongoGetLeadsRepository);
    const { body, statusCode } = await getLeadsController.handle();

    res.send(body).status(statusCode);
  });
  const port = process.env.PORT || 8000;

  app.listen(port, () => console.log(`listening on port ${port}!`));
};
main();
