import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../telegram/user.entity';
export declare class TelegramService implements OnModuleInit {
    private userRepository;
    private bot;
    constructor(userRepository: Repository<User>);
    onModuleInit(): void;
    private setupBot;
    sendMessage(telegramId: string, message: string): Promise<void>;
}
