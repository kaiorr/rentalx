import { RepositoriesCategory } from "../../repositories/implementations/CategoriesRepository";
import { UploadFileCategoryController } from "./UploadFileCategoryController";
import { UploadFileCategoryUseCase } from "./UploadFileCategoryUseCase";

const categoryRepository = RepositoriesCategory.getInstance();

const uploadFileCategoryUseCase = new UploadFileCategoryUseCase(
  categoryRepository
);

const uploadFileCategoryController = new UploadFileCategoryController(
  uploadFileCategoryUseCase
);

export { uploadFileCategoryController };
