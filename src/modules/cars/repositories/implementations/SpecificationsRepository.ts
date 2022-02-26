import { Specification } from "../../entities/Specification";
import { v4 as uuidV4 } from "uuid";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../ISpecificationsRepository";

class RepositoriesSpecification implements ISpecificationRepository {
  private specifications: Specification[];

  private static INSTANCE: RepositoriesSpecification;

  private constructor() {
    this.specifications = [];
  }

  static getInstance(): RepositoriesSpecification {
    if (!RepositoriesSpecification.INSTANCE) {
      RepositoriesSpecification.INSTANCE = new RepositoriesSpecification();
    }
    return RepositoriesSpecification.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      id: uuidV4(),
      name,
      description,
      created_at: new Date(),
    });

    if (!name || !description) {
      throw new Error("Name and description are required");
    }
    this.specifications.push(specification);
  }

  list(): Specification[] {
    const orderArr = this.specifications.reverse();
    return orderArr;
  }

  findByName(name: string): Specification {
    const specificationExistis = this.specifications.find(
      (specification) => specification.name === name
    );
    return specificationExistis;
  }
}

export { RepositoriesSpecification };
