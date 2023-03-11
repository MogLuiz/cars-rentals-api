import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';
import { CreateSpecificationController } from "./CreateSpecificationController";
import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';

const specificationsRepository = SpecificationsRepository.getInstance()
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository)
export const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)