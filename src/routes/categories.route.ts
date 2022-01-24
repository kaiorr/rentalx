import { Router } from "express";
import { RepositoriesCategory } from "../repositories/CategoriesRepository";

const categoriesRoute = Router();
const categoriesRepository = new RepositoriesCategory();

categoriesRoute.post("/categories", (request, response) => {
  const { name, description } = request.body;

  const categoryAllReadyExists = categoriesRepository.findByName(name);

  if (categoryAllReadyExists) {
    return response.status(400).json({
      error: "Category all ready exists",
    });
  }

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoute.get("/categories", (request, response) => {
  const getCategories = categoriesRepository.list();

  return response.json(getCategories);
});

export { categoriesRoute };
