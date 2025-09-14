import { Controller, Delete, Param } from "@nestjs/common";
import { DeleteTaskService } from "../services";

@Controller()
export class DeleteTaskController {
  constructor(private readonly deleteTaskService: DeleteTaskService){}

  @Delete(':id')
  public handle(@Param('id') id: string) {
    return `delete task: ${id}`
  }
}