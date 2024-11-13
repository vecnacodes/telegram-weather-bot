import { Repository } from 'typeorm';
import { User } from '../telegram/user.entity';
export declare class AdminService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getAllUsers(): Promise<User[]>;
    blockUser(userId: number): Promise<User>;
    unblockUser(userId: number): Promise<User>;
    deleteUser(userId: number): Promise<void>;
}
