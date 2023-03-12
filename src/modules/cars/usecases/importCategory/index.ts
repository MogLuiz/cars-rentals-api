import { ImportCategoryUseCase } from './ImportCategoryUseCase';
import { ImportCategoryController } from './ImportCategoryController';

const importCategoryUseCase = new ImportCategoryUseCase()
export const importCategoryController = new ImportCategoryController(importCategoryUseCase)