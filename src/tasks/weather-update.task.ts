import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../telegram/user.entity';
import { TelegramService } from '../telegram/telegram.service';
import { WeatherService } from '../weather/weather.service';

@Injectable()
export class WeatherUpdateTask {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private telegramService: TelegramService,
    private weatherService: WeatherService,
  ) {}

  @Cron('0 8 * * *') // Run every day at 8:00 AM
  async sendDailyWeatherUpdates() {
    const users = await this.userRepository.find({ where: { isSubscribed: true } });
    const weatherData = await this.weatherService.getWeatherUpdate('London'); // Replace with user's city

    for (const user of users) {
      await this.telegramService.sendMessage(user.telegramId, weatherData);
    }
  }
}