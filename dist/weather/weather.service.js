"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let WeatherService = class WeatherService {
    constructor() {
        const apiKey = process.env.WEATHER_API_KEY;
        if (!apiKey) {
            throw new Error('WEATHER_API_KEY must be defined in the environment variables');
        }
        this.apiKey = apiKey;
    }
    onModuleInit() {
        console.log('WeatherService has been initialized');
    }
    async getWeatherUpdate(city) {
        try {
            const response = await axios_1.default.get(`http://api.openweathermap.org/data/2.5/weather`, {
                params: {
                    q: city,
                    appid: this.apiKey,
                    units: 'metric'
                }
            });
            const { main, weather } = response.data;
            return `Current weather in ${city}: ${weather[0].description}. Temperature: ${main.temp}°C`;
        }
        catch (error) {
            console.error('Error fetching weather data:', error);
            return 'Unable to fetch weather data at this time.';
        }
    }
};
exports.WeatherService = WeatherService;
exports.WeatherService = WeatherService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], WeatherService);
//# sourceMappingURL=weather.service.js.map