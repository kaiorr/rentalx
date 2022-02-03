import { Request, Response } from "express";
import { UploadFileCategoryUseCase } from "./UploadFileCategoryUseCase";

enum MimeType {
  textCsv = "text/csv",
  applicationCsv = "application/csv",
  applicationOctetStream = "application/octet-stream",
}

class UploadFileCategoryController {
  constructor(private uploadFileCategoryUseCase: UploadFileCategoryUseCase) {}
  handle(request: Request, response: Response): Response {
    const { file } = request;
    const { mimetype, size } = file;

    if (mimetype !== MimeType.textCsv || size > 1000) {
      return response
        .status(415)
        .json({
          error: "Type file is not support or file too big!",
          mimetype: file.mimetype,
          size: file.size,
        });
    }

    this.uploadFileCategoryUseCase.execute(file);

    return response.send();
  }
}

export { UploadFileCategoryController };
