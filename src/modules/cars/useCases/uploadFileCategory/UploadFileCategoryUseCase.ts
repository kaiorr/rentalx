import fs from "fs";
import { parse } from "csv-parse";

class UploadFileCategoryUseCase {
  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);
    const parser = parse();
    const chunks = [];

    stream.pipe(parser);

    parser.on("readable", () => {
      let chunk: any;
      while ((chunk = parser.read())) {
        chunks.push(chunk);
        console.log(chunk);
      }
    });
  }
}

export { UploadFileCategoryUseCase };
