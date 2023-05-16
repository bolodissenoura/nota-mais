/* eslint-disable turbo/no-undeclared-env-vars */
import express from "express";
import { config } from "dotenv";

config();

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  console.log("lallala");
  res.send("Hello world");
});

app.listen(port, () => console.log(`listening on port ${port}!`));
