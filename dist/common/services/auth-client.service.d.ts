import { ClientProxy } from '@nestjs/microservices';
import type { Command } from '../constants/commands';
export declare class AuthClientService {
    private readonly client;
    constructor(client: ClientProxy);
    send<T>(cmd: Command, payload?: unknown): Promise<T>;
}
