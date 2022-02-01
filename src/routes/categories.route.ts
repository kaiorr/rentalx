import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoute = Router();

categoriesRoute.post("/category", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoute.get("/categories", (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRoute };
