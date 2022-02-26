import { Category } from "../../entities/Category";
import { RepositoriesCategory } from "../../repositories/implementations/CategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: RepositoriesCategory) {}

  execute(): Category[] {
    const getCategories = this.categoriesRepository.list();

    return getCategories;
  }
}

export { ListCategoriesUseCase };
