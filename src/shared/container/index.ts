import { container } from "tsyringe";
import { ICatergoriesRepository } from "modules/cars/repositories/ICategoriesRepository";
import { RepositoriesCategory } from "modules/cars/repositories/implementations/CategoriesRepository";

container.registerSingleton<ICatergoriesRepository>(
  "CategoriesRepository",
  RepositoriesCategory
);
