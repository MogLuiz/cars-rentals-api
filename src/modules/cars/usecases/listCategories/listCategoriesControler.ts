import { ListCategoriesUseCase } from "./listCategoriesUseCase";
import { Request, Response } from "express";

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    return response.status(201).json(this.listCategoriesUseCase.execute());
  }
}
