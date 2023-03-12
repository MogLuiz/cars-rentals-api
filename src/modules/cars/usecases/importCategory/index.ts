import { CategoriesRepository } from './../../repositories';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';
import { ImportCategoryController } from './ImportCategoryController';

const categoriesRepository = CategoriesRepository.getInstance()
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository)
export const importCategoryController = new ImportCategoryController(importCategoryUseCase)