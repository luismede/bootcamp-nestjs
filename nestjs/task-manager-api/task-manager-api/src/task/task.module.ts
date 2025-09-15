import { Module } from "@nestjs/common";
import { 
  CreateTaskController,
  DeleteTaskController,
  FindTaskByIdController,
  FindTaskAllController
} 
from './controller';


import { 
  CreateTaskService,
  DeleteTaskService,
  FindTaskByIdService,
  FindTaskAllService
} 
from "./services";

@Module({
    controllers: [
      CreateTaskController,
      DeleteTaskController,
      FindTaskByIdController,
      FindTaskAllController
    ],
    providers: [
    CreateTaskService,
    DeleteTaskService,
    FindTaskByIdService,
    FindTaskAllService
  ]
})

export class TaskModule {}
