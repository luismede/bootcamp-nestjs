import { Controller, Get } from "@nestjs/common";
import { FindAllTasksService } from "../services";

@Controller()
export class FindAllTasksController {
  constructor(private readonly findAllTasksService: FindAllTasksService) {}

  @Get()
  public handle() {
    const ArrayOfNumbers = [1,2,3,4,5,6]
    return JSON.stringify(ArrayOfNumbers);
  }
}