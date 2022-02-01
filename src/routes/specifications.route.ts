import { Router } from "express";
import { RepositoriesSpecification } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoute = Router();
const specificationsRepository = new RepositoriesSpecification();

specificationsRoute.post("/specification", (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );

  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

specificationsRoute.get("/specifications", (request, response) => {
  const getSpecifications = specificationsRepository.list();

  return response.json(getSpecifications);
});

export { specificationsRoute };
