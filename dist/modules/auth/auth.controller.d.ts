import { AuthClientService } from '../../common/services/auth-client.service';
import type { LoginBody, RegisterBody, ResetPasswordBody } from '../../common/types/microservice.types';
export declare class AuthController {
    private readonly authClient;
    constructor(authClient: AuthClientService);
    register(body: RegisterBody): Promise<unknown>;
    login(body: LoginBody): Promise<unknown>;
    resetPassword(body: ResetPasswordBody): Promise<unknown>;
    private message;
}
