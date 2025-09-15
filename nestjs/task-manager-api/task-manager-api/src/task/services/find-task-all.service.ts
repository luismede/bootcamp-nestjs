import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/database/services/prisma.service";
import { FindTaskAllOutputDTO } from "../dto/io/find-task-all-output.dto";

@Injectable()
export class FindTaskAllService {

  constructor (private readonly prismaService: PrismaService) {}

  public async execute(): Promise<FindTaskAllOutputDTO> {
    const tasks = await this.prismaService.task.findMany({
    select: {
        id: true,
        name: true,
        description: true,
        statusId: true,
        status: {
          select: {
            id: true,
            name: true,
          }
        }
      }     
    });

    return {
      data: tasks.map(task => ({
        id: task.id,
        name: task.name,
        description: task.description || null,
        statusId: task.statusId, 
        status: task.status
      })),
    };
  }
} 
