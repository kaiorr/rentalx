import { ICatergoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICatergoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAllReadyExists = this.categoriesRepository.findByName(name);

    if (categoryAllReadyExists) {
      throw new Error("Category all ready exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
