"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const schedule_1 = require("@nestjs/schedule");
const user_entity_1 = require("../telegram/user.entity");
const telegram_module_1 = require("../telegram/telegram.module");
const weather_module_1 = require("../weather/weather.module");
const weather_update_task_1 = require("./weather-update.task");
let TasksModule = class TasksModule {
};
exports.TasksModule = TasksModule;
exports.TasksModule = TasksModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            schedule_1.ScheduleModule.forRoot(),
            telegram_module_1.TelegramModule,
            weather_module_1.WeatherModule,
        ],
        providers: [weather_update_task_1.WeatherUpdateTask],
    })
], TasksModule);
//# sourceMappingURL=tasks.module.js.map