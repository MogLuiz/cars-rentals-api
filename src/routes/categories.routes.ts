import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories";
import { CreateCategoryUseCase } from "../modules/cars/usecases/createCategory";

export const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
  createCategoryUseCase.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  return response.status(201).json(categoriesRepository.list());
});


