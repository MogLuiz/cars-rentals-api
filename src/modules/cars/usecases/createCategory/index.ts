import { CategoriesRepository } from '../../repositories'
import { CreateCategoryController } from './CreateCategoryControler'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

export * from './CreateCategoryUseCase'
export * from './CreateCategoryControler'

const categoriesRepository = new CategoriesRepository()
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
export const createCategoryController = new CreateCategoryController(createCategoryUseCase)