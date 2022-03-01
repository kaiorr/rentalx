import { Category } from "../../entities/Category";
import { RepositoriesCategory } from "../../repositories/implementations/CategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: RepositoriesCategory) {}

  async execute(): Promise<Category[]> {
    const getCategories = await this.categoriesRepository.list();

    return getCategories;
  }
}

export { ListCategoriesUseCase };
