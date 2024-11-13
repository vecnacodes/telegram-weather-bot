import { WeatherService } from '../weather/weather.service';
import { UserService } from '../user/user.service';
import { TelegramService } from '../telegram/telegram.service';
export declare class TasksService {
    private readonly weatherService;
    private readonly userService;
    private readonly telegramService;
    constructor(weatherService: WeatherService, userService: UserService, telegramService: TelegramService);
    sendDailyWeatherUpdates(): Promise<void>;
}
