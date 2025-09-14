import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { DatabaseModule } from './task/shared/database/database.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    TaskModule,
    DatabaseModule,
    RouterModule.register([
      {
        path: 'task',
        module: TaskModule
      }
    ])
  ]
})
export class AppModule {}
