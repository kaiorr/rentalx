import { Router } from "express";
import { RepositoriesCategory } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryUseCase } from "../modules/cars/useCases/createCategory/CreateCategoryUseCase";

const categoriesRoute = Router();
const categoriesRepository = new RepositoriesCategory();

categoriesRoute.post("/category", (request, response) => {
  const { name, description } = request.body;

  const createCategoriUseCase = new CreateCategoryUseCase(categoriesRepository);

  createCategoriUseCase.execute({ name, description });

  return response.status(201).send();
});

categoriesRoute.get("/categories", (request, response) => {
  const getCategories = categoriesRepository.list();

  return response.json(getCategories);
});

export { categoriesRoute };
