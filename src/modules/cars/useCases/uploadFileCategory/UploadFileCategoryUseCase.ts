class UploadFileCategoryUseCase {
  execute(file: Express.Multer.File): void {
    console.log(file);
  }
}

export { UploadFileCategoryUseCase };
