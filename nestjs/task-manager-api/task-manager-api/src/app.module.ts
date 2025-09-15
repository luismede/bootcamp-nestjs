import { Module } from "@nestjs/common";
import { TaskModule } from './task/task.module'
import { DatabaseModule } from "./shared/database/database.module";
import { RouterModule } from "@nestjs/core";

@Module({
  imports: [
    DatabaseModule,
    TaskModule,
    RouterModule.register([
      {
        path: 'task',
        module: TaskModule
      }
    ])
  ],
})
export class AppModule {}
