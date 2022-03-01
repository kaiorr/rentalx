import { Router } from "express";
import Multer from "multer";
import createCategoryController from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import { uploadFileCategoryController } from "../modules/cars/useCases/uploadFileCategory";

const categoriesRoute = Router();
const upload = Multer({ dest: "./tmp" });

categoriesRoute.post("/category", (request, response) => {
  return createCategoryController().handle(request, response);
});

categoriesRoute.get("/categories", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoute.post("/import", upload.single("file"), (request, response) => {
  return uploadFileCategoryController.handle(request, response);
});

export { categoriesRoute };
