import { Router } from "express";
import Multer from "multer";

import { CreateCategoryController } from "modules/cars/useCases/createCategory/CreateCategoryController";
import listCategoriesController from "../modules/cars/useCases/listCategories";
import { uploadFileCategoryController } from "../modules/cars/useCases/uploadFileCategory";

const categoriesRoute = Router();
const upload = Multer({ dest: "./tmp" });

const createCategoryController = new CreateCategoryController();

categoriesRoute.post("/category", createCategoryController.handle);

categoriesRoute.get("/categories", (request, response) => {
  return listCategoriesController().handle(request, response);
});

categoriesRoute.post("/import", upload.single("file"), (request, response) => {
  return uploadFileCategoryController.handle(request, response);
});

export { categoriesRoute };
