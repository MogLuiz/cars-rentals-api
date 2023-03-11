import { ListCategoriesUseCase } from './ListCategoriesUseCase';
import { ListCategoriesController } from './ListCategoriesController';
import { CategoriesRepository } from './../../repositories/CategoriesRepository';

const categoriesRepository = CategoriesRepository.getInstance()
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository)
export const listCategoriesController = new ListCategoriesController(listCategoriesUseCase)