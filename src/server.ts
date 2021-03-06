import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { AppError } from "../errors/AppErrors";
import "./database";
import "./shared/container";
import { router } from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "docs/swagger.json";

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3333, () => {
  console.log("Server started");
});

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        message: error.message,
      });
    }

    console.error(error.message);

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);
