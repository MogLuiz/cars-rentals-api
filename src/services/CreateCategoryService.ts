import { ICategoriesRepository } from "../repositories";

interface IRequestData {
  name: string;
  description: string;
}

export class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequestData): void {
    if (this.categoriesRepository.findByName(name)) {
      throw new Error("Category Already exists!");
    }

    this.categoriesRepository.create({ name, description });
  }
}
