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
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const weather_service_1 = require("../weather/weather.service");
const user_service_1 = require("../user/user.service");
const telegram_service_1 = require("../telegram/telegram.service");
let TasksService = class TasksService {
    constructor(weatherService, userService, telegramService) {
        this.weatherService = weatherService;
        this.userService = userService;
        this.telegramService = telegramService;
    }
    async sendDailyWeatherUpdates() {
        const weatherData = await this.weatherService.getWeatherUpdate('London');
        const users = await this.userService.getSubscribedUsers();
        for (const user of users) {
            await this.telegramService.sendMessage(user.telegramId, weatherData);
        }
    }
};
exports.TasksService = TasksService;
__decorate([
    (0, schedule_1.Cron)('0 8 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "sendDailyWeatherUpdates", null);
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [weather_service_1.WeatherService,
        user_service_1.UserService,
        telegram_service_1.TelegramService])
], TasksService);
//# sourceMappingURL=tasks.service.js.map