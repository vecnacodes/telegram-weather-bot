import { OnModuleInit } from '@nestjs/common';
export declare class WeatherService implements OnModuleInit {
    private apiKey;
    constructor();
    onModuleInit(): void;
    getWeatherUpdate(city: string): Promise<string>;
}
