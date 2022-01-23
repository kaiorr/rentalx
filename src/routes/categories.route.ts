import { Router } from "express";
import { RepositoriesCategory } from "../repositories/CategoriesRepository";

const categoriesRoute = Router();

categoriesRoute.post("/categories", (request, response) => {
  const { name, description } = request.body;
  const categoriesRepository = new RepositoriesCategory();

  categoriesRepository.create({ name, description });

  return response.status(201).json(categoriesRepository);
});

export { categoriesRoute };
