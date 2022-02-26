import { Specification } from "../../entities/Specification";
import { RepositoriesSpecification } from "../../repositories/implementations/SpecificationsRepository";

class ListSpecificationsUseCase {
  constructor(private specificationsRepository: RepositoriesSpecification) {}
  execute(): Specification[] {
    const getSpecifications = this.specificationsRepository.list();

    return getSpecifications;
  }
}

export { ListSpecificationsUseCase };
