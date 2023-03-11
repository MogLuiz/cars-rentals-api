import { CategoriesRepository } from '../../repositories'
import { CreateCategoryController } from './CreateCategoryControler'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

const categoriesRepository = new CategoriesRepository()
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
export const createCategoryController = new CreateCategoryController(createCategoryUseCase)