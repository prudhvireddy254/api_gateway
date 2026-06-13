"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTH_SERVICE_TCP_OPTIONS = exports.AUTH_SERVICE_CLIENT = void 0;
const microservices_1 = require("@nestjs/microservices");
exports.AUTH_SERVICE_CLIENT = 'AUTH_SERVICE';
const host = process.env.AUTH_SERVICE_HOST ?? 'auth-service';
const port = Number(process.env.AUTH_SERVICE_PORT ?? 4000);
exports.AUTH_SERVICE_TCP_OPTIONS = {
    name: exports.AUTH_SERVICE_CLIENT,
    transport: microservices_1.Transport.TCP,
    options: { host, port },
};
//# sourceMappingURL=microservice.constants.js.map