import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories";
import { createCategoryController } from "../modules/cars/usecases/createCategory";

export const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return response.status(201).json(categoriesRepository.list());
});
