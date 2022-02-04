import fs from "fs";
import { parse } from "csv-parse";
import { ICatergoriesRepository } from "../../repositories/ICategoriesRepository";

interface IStreamFile {
  name: string;
  description: string;
}

class UploadFileCategoryUseCase {
  constructor(private categoryRepository: ICatergoriesRepository) {}

  loadableFile(file: Express.Multer.File): Promise<IStreamFile[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const chunks: IStreamFile[] = [];
      const parser = parse();

      stream.pipe(parser);

      parser
        .on("data", async (file) => {
          const [name, description] = file;
          chunks.push({ name, description });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(chunks);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const streamCategories = await this.loadableFile(file);

    streamCategories.map(async (category) => {
      const { name, description } = category;
      const existsCategory = this.categoryRepository.findByName(name);

      try {
        if (!existsCategory) {
          this.categoryRepository.create({ name, description });
        }
      } catch (existsCategory) {
        throw new Error("Category already exists!");
      }
    });
  }
}

export { UploadFileCategoryUseCase };
