import { Specification } from "../../model";
import { SpecificationsRepository } from "./../../repositories";

export class ListSpecificationsUseCase {
  constructor(private specificationsRepository: SpecificationsRepository) {}

  execute(): Specification[] {
    return this.specificationsRepository.list();
  }
}
