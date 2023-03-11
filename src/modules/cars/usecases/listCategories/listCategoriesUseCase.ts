import { Category } from "../../model";
import { CategoriesRepository } from "./../../repositories";

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute(): Category[] {
    return this.categoriesRepository.list();
  }
}
