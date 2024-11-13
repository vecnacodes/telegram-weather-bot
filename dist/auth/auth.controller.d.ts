export declare class AuthController {
    googleAuth(): Promise<void>;
    googleAuthRedirect(): Promise<{
        message: string;
    }>;
}
