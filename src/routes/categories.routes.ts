import { Router } from "express";
import { CreateCategoryService } from "../modules/cars/services";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  return response.status(201).json(categoriesRepository.list());
});

export { categoriesRoutes };
