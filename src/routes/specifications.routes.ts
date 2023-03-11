import { Router } from "express";
import { SpecificationsRepository } from "./../modules/cars/repositories";
import { createSpecificationController } from "../modules/cars/usecases/createSpecification";

export const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationsRoutes.get("/", (request, response) => {
  return response.status(201).json(specificationsRepository.list());
});
