import { Router } from "express";
import multer from "multer";

import {
  createCategoryController,
  listCategoriesController,
  importCategoryController,
} from "../modules/cars/usecases";

export const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});
