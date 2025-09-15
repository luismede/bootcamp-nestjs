import { Module } from "@nestjs/common";
import { CreateTaskController, DeleteTaskController } from './controller'
import { CreateTaskService, DeleteTaskService } from "./services";

@Module({
    controllers: [
      CreateTaskController,
      DeleteTaskController
    ],
    providers: [
    CreateTaskService,
    DeleteTaskService
  ]
})

export class TaskModule {}
