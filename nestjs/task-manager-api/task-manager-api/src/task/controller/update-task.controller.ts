import { BadRequestException, Body, Controller, HttpCode, HttpStatus, Put } from "@nestjs/common";
import { UpdateTaskInputDTO } from "../dto/io/update-task-input.dto";
import { UpdateTaskOutputDTO } from "../dto/io/update-task-output.dto";
import { UpdateTaskService } from "../services";

@Controller()
export class UpdateTaskController {
  constructor (private readonly updateTaskService: UpdateTaskService) {}


  @HttpCode(HttpStatus.OK)
  @Put()
  public async handle(@Body() data: UpdateTaskInputDTO): Promise<UpdateTaskOutputDTO> {
    if (!data.id) throw new BadRequestException ('Ops! Informe qual o id da tarefa');

    const result = this.updateTaskService.execute(data)

    return result;
  }
}

