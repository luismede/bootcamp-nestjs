import { TaskStatus } from "@prisma/client";

export class UpdateTaskOutputDTO {
  id: number;
  name?: string | null;
  description?: string | null;
  createdAt: Date;
  finishedAt?: Date | null;
  statusId: number;
  status: TaskStatus
}
