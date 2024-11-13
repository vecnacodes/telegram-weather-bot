import { AdminService } from './admin.service';
import { User } from '../telegram/user.entity';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    getAdminPanel(): Promise<{
        users: User[];
    }>;
    blockUser(id: string): Promise<User>;
    unblockUser(id: string): Promise<User>;
    deleteUser(id: string): Promise<{
        success: boolean;
    }>;
}
