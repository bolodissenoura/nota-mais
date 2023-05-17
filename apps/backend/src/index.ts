/* eslint-disable turbo/no-undeclared-env-vars */
import express, { response } from "express";
import { config } from "dotenv";
import { MongoGetLeadsRepository } from "./repositories/get-leads/mongo-get-leads";
import { GetLeadsController } from "./controllers/get-leads/get-leads";

config();

const app = express();
const port = process.env.PORT || 8000;

app.get("/leads", async (req, res) => {
  const mongoGetLeadsRepository = new MongoGetLeadsRepository();

  const getLeadsController = new GetLeadsController(mongoGetLeadsRepository);
  const { body, statusCode } = await getLeadsController.handle();

  res.send(body).status(statusCode);
});

app.listen(port, () => console.log(`listening on port ${port}!`));
