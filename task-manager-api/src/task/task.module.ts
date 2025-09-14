import { Module } from '@nestjs/common';
import { 
  CreateTaskController,
  DeleteTaskController,
  UpdateTaskController,
  FindAllTasksController,
  FindTaskByIdController
 } from './controllers';
import { 
  CreateTaskService,
  UpdateTaskService,
  DeleteTaskService,
  FindAllTasksService,
  FindTaskByIdService
 } from './services';

@Module({
  providers: [
    CreateTaskService,
    UpdateTaskService,
    DeleteTaskService,
    FindAllTasksService,
    FindTaskByIdService
  ],
  controllers: [
    CreateTaskController,
    UpdateTaskController,
    DeleteTaskController,
    FindAllTasksController,
    FindTaskByIdController
  ],
})
export class TaskModule {}
