import { PrismaClient } from '@prisma/client';
import seedTaskStatus from './seeds/task-status';
import { SeedFunction } from './seeds/type';

async function seed(): Promise<void> {
  const prismaClient = new PrismaClient();
  const seedMomentExecution = 'Seed moment execution';
  const seeds: SeedFunction[] = [seedTaskStatus];
  console.time(seedMomentExecution);
  for (const seed of seeds) {
    await seed(prismaClient);
  }
  console.timeEnd(seedMomentExecution);
}

seed();
