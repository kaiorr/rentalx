import { Router } from "express";
import { RepositoriesCategory } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoute = Router();
const categoriesRepository = new RepositoriesCategory();

categoriesRoute.post("/categories", (request, response) => {
  const { name, description } = request.body;

  const createCategoriService = new CreateCategoryService(categoriesRepository);

  createCategoriService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoute.get("/categories", (request, response) => {
  const getCategories = categoriesRepository.list();

  return response.json(getCategories);
});

export { categoriesRoute };
