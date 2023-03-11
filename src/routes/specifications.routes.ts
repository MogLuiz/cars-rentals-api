import { Router } from "express";
import { listSpecificationsController } from "../modules/cars/usecases/listSpecifications";
import { createSpecificationController } from "../modules/cars/usecases/createSpecification";

export const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationsRoutes.get("/", (request, response) => {
  return listSpecificationsController.handle(request, response);
});
