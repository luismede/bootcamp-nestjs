import { ConflictException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/database/services/prisma.service";
import { CreateTaskInputDTO } from "../dto/io/create-task-input.dto";
import { CreateTaskOutputDTO } from "../dto/io/create-task-output.dto";
import { TaskStatusEnum } from "src/shared";

@Injectable()
export class CreateTaskService {
  constructor(private readonly prismaService: PrismaService) {}

  public async execute({name, description}: CreateTaskInputDTO): Promise<CreateTaskOutputDTO> {
    const taskWithSameName = await this.prismaService.task.findFirst({
      where: {
        name,
      },
      select: {
        id: true,
      },
    });

    if (taskWithSameName) throw new ConflictException('Ops! Já existe uma tarefa com esse nome');

    return this.prismaService.task.create({
      data: {
        name,
        description,
        statusId: TaskStatusEnum.TODO,
      },
      select: {
        name: true,
        id: true
    }
    })
  }
}
