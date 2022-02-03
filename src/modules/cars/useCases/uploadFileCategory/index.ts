import { UploadFileCategoryController } from "./UploadFileCategoryController";
import { UploadFileCategoryUseCase } from "./UploadFileCategoryUseCase";

const uploadFileCategoryUseCase = new UploadFileCategoryUseCase();

const uploadFileCategoryController = new UploadFileCategoryController(
  uploadFileCategoryUseCase
);

export { uploadFileCategoryController };
