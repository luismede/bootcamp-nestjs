import { Prisma, PrismaClient } from '@prisma/client';
import { TaskStatusEnum } from '../../src/task/shared';
import { SeedFunction } from './type';

const prisma = new PrismaClient();
const consoleTimeTrackingLabel = 'Seed execution time';

export default <SeedFunction>(
  async function (prismaClient: PrismaClient): Promise<void> {
    const data: Prisma.TaskCreateManyStatusInput[] = [
      {
        id: TaskStatusEnum.TODO,
        name: 'Pendente'
      },
      {
        id: TaskStatusEnum.IN_PROGRESS,
        name: 'Em progresso'
      },
      {
        id: TaskStatusEnum.FINISHED,
        name: 'Finalizada'
      }
    ];

    try {
      await prismaClient.statusTask.createMany({
        data
      });
    } catch (e) {
      console.error(e);
    }
  }
);
