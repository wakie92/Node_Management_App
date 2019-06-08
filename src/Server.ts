import express, { Application } from "express";

class Server {
  public app: Application;

  public static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    this.app = express();
  }
}

export default Server;
