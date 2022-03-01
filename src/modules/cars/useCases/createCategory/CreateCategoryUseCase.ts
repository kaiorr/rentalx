import { inject, injectable } from "tsyringe";
import { ICatergoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICatergoriesRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAllReadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAllReadyExists) {
      throw new Error("Category all ready exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
