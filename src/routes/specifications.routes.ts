import { Router } from "express";
import { CreateSpecificationService } from "../modules/cars/services";
import { SpecificationsRepository } from "./../modules/cars/repositories";

export const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );
  createSpecificationService.execute({ name, description });
  return response.status(201).send();
});

specificationsRoutes.get("/", (request, response) => {
  return response.status(201).json(specificationsRepository.list());
});
