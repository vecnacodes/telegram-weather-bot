import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { User } from '../telegram/user.entity';
import { TelegramModule } from '../telegram/telegram.module';
import { WeatherModule } from '../weather/weather.module';
import { WeatherUpdateTask } from './weather-update.task';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    ScheduleModule.forRoot(),
    TelegramModule,
    WeatherModule,
  ],
  providers: [WeatherUpdateTask],
})
export class TasksModule {}