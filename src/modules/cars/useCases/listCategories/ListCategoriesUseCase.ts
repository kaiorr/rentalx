import { Category } from "../../models/Category";
import { RepositoriesCategory } from "../../repositories/CategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: RepositoriesCategory) {}

  execute(): Category[] {
    const getCategories = this.categoriesRepository.list();

    return getCategories;
  }
}

export { ListCategoriesUseCase };
