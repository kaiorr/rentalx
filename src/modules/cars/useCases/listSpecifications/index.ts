import { RepositoriesSpecification } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const specificationRespository = RepositoriesSpecification.getInstance();

const listSpecificationsUseCase = new ListSpecificationsUseCase(
  specificationRespository
);

const listSpecificationsController = new ListSpecificationsController(
  listSpecificationsUseCase
);

export { listSpecificationsController };
