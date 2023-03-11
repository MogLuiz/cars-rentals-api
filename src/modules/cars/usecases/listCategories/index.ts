import { ListCategoriesUseCase } from './listCategoriesUseCase';
import { ListCategoriesController } from './listCategoriesControler';
import { CategoriesRepository } from './../../repositories/CategoriesRepository';

const categoriesRepository = new CategoriesRepository()
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository)
export const listCategoriesController = new ListCategoriesController(listCategoriesUseCase)