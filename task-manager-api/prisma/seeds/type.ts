import { PrismaClient } from '@prisma/client';

export type SeedFunction = (prismaClient: PrismaClient) => Promise<void>;
