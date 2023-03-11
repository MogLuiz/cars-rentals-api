import { ISpecificationsRepository } from "../../repositories";

interface IRequestData {
  name: string;
  description: string;
}

export class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequestData) {
    if (this.specificationsRepository.findByName(name)) {
      throw new Error("Specification Already exists!");
    }
    this.specificationsRepository.create({ name, description });
  }
}
