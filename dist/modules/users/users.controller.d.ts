import { AuthClientService } from '../../common/services/auth-client.service';
import type { CompleteOnboardingBody, UpdateProfileBody } from '../../common/types/microservice.types';
export declare class UsersController {
    private readonly authClient;
    constructor(authClient: AuthClientService);
    getProfile(username: string): Promise<unknown>;
    updateProfile(body: UpdateProfileBody): Promise<unknown>;
    completeOnboarding(body: CompleteOnboardingBody): Promise<unknown>;
    private message;
}
