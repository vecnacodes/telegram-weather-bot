import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { WeatherService } from '../weather/weather.service';
import { UserService } from '../user/user.service';
import { TelegramService } from '../telegram/telegram.service';

@Injectable()
export class TasksService {
  constructor(
    private readonly weatherService: WeatherService,
    private readonly userService: UserService,
    private readonly telegramService: TelegramService,
  ) {}

  @Cron('0 8 * * *') // Run every day at 8:00 AM
  async sendDailyWeatherUpdates() {
    const weatherData = await this.weatherService.getWeatherUpdate('London'); // Replace 'London' with a default city or user preference
    const users = await this.userService.getSubscribedUsers();

    for (const user of users) {
      await this.telegramService.sendMessage(user.telegramId, weatherData);
    }
  }
}