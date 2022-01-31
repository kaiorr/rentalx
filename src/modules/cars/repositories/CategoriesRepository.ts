import { Category } from "../models/Category";
import { v4 as uuidV4 } from "uuid";
import {
  ICatergoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

class RepositoriesCategory implements ICatergoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      id: uuidV4(),
      name,
      description,
      created_at: new Date(),
    });

    if (!name || !description) {
      throw new Error("Name and description are required");
    }
    this.categories.push(category);
  }

  list(): Category[] {
    const orderArr = this.categories.reverse();
    return orderArr;
  }

  findByName(name: string): Category {
    const categoryExistis = this.categories.find(
      (category) => category.name === name
    );

    return categoryExistis;
  }
}

export { RepositoriesCategory };
