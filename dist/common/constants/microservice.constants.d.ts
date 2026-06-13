import { Transport } from '@nestjs/microservices';
export declare const AUTH_SERVICE_CLIENT = "AUTH_SERVICE";
export declare const AUTH_SERVICE_TCP_OPTIONS: {
    readonly name: "AUTH_SERVICE";
    readonly transport: Transport.TCP;
    readonly options: {
        readonly host: string;
        readonly port: number;
    };
};
