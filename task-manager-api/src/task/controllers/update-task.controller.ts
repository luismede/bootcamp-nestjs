import { Controller, Put } from "@nestjs/common";
import { UpdateTaskService } from "../services";

@Controller()
export class UpdateTaskController {
  constructor(private readonly updateTaskService: UpdateTaskService) {}

  @Put()
  public handle() {
    return 'This method is: put'
  }
}