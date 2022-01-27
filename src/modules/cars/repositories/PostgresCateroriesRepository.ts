import { Category } from "../models/Category";
import {
  ICatergoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

class PostgresCategoriesRepository implements ICatergoriesRepository {
  findByName(name: string): Category {
    if (!name) {
      throw new Error("Name is required");
    }
    console.log("findByName");
    return null;
  }
  list(): Category[] {
    if (!Array) {
      throw new Error("Method not implemented.");
    }
    console.log("list");
    return null;
  }
  create({ name, description }: ICreateCategoryDTO): void {
    if (!name || !description) {
      throw new Error("Method not implemented.");
    }
    console.log("create");
  }
}

export { PostgresCategoriesRepository };
