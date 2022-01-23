import { Router } from "express";
import { RepositoriesCategory } from "../repositories/CategoriesRepository";

const categoriesRoute = Router();
const categoriesRepository = new RepositoriesCategory();

categoriesRoute.post("/categories", (request, response) => {
  const { name, description } = request.body;

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoute.get("/categories", (request, response) => {
  const getCategories = categoriesRepository.list();

  return response.json(getCategories);
});

export { categoriesRoute };
