export type CreateTaskOutputDTO = {
  name: string,
  createdAt: Date,
  finishedAt?: Date | null,
  id: number;
}
