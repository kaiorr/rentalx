import { Specification } from "../models/Specification";
import { v4 as uuidV4 } from "uuid";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "./ISpecificationsRepository";

class SpecificationsRepositort implements ISpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
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
    return this.specifications;
  }

  findByName(name: string): Specification {
    const specificationExistis = this.specifications.find(
      (specification) => specification.name === name
    );
    return specificationExistis;
  }
}

export { SpecificationsRepositort };
