export interface JwtPayload {
    username: string;
    sub: number;
}
export declare const CurrentUser: (...dataOrPipes: unknown[]) => ParameterDecorator;
