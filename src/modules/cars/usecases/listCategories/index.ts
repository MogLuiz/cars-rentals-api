import { ListCategoriesUseCase } from './listCategoriesUseCase';
import { ListCategoriesController } from './listCategoriesController';
import { CategoriesRepository } from './../../repositories/CategoriesRepository';

const categoriesRepository = new CategoriesRepository()
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository)
export const listCategoriesController = new ListCategoriesController(listCategoriesUseCase)