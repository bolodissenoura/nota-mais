import express from "express";
import cors from "cors";
import mongoose from "mongoose";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
  }

  private middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private database (): void{
    mongoose.connect('mongodb://')
  }
}
