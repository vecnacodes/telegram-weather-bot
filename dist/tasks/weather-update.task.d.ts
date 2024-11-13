import { Repository } from 'typeorm';
import { User } from '../telegram/user.entity';
import { TelegramService } from '../telegram/telegram.service';
import { WeatherService } from '../weather/weather.service';
export declare class WeatherUpdateTask {
    private userRepository;
    private telegramService;
    private weatherService;
    constructor(userRepository: Repository<User>, telegramService: TelegramService, weatherService: WeatherService);
    sendDailyWeatherUpdates(): Promise<void>;
}
