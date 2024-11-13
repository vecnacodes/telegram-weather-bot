import { Repository } from 'typeorm';
import { User } from '../telegram/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getSubscribedUsers(): Promise<User[]>;
    subscribeUser(telegramId: string): Promise<User>;
    unsubscribeUser(telegramId: string): Promise<User | null>;
}
