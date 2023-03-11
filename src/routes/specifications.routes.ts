import { Router } from "express";
import { listSpecificationsController, createSpecificationController } from "../modules/cars/usecases";

export const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationsRoutes.get("/", (request, response) => {
  return listSpecificationsController.handle(request, response);
});
