import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateTaskService } from '../services/';
import type { CreateTaskInputDTO } from '../dto/io/input/create-task.input.dto'

@Controller()
export class CreateTaskController {
  constructor(private readonly service: CreateTaskService) {

  }
  
  // Método principal
  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async handle(
    @Body() { name, description }: CreateTaskInputDTO
  ) {
    return `Teste do Status code (enum): ${HttpStatus.CREATED}`
  }
}
