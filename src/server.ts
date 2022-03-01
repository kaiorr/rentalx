import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "docs/swagger.json";
import databaseConnection from "database";
import { AppError } from "../errors/AppErrors";
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

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

databaseConnection
  .then(() => {
    console.log("Database connected");
    app.listen(3333, () => console.log("Server is running!"));
  })
  .catch((error) => {
    console.error("Error: ", error.message);
  });
