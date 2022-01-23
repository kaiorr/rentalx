import { Router } from "express";

const baseIndex = Router();

baseIndex.get("/", (request, response) => {
  if (!response.status(200)) {
    return response.json("Deu Erro... Chama o Senior...");
  }
  return response.json("Service is running <3");
});

export { baseIndex };
