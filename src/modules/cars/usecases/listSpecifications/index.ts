import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';

const specificationsRepository = SpecificationsRepository.getInstance()
const listSpecificationsUseCase = new ListSpecificationsUseCase(specificationsRepository);
export const listSpecificationsController = new ListSpecificationsController(listSpecificationsUseCase);
