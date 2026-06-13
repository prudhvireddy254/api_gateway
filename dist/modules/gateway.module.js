"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const microservices_1 = require("@nestjs/microservices");
const jwt_constants_1 = require("../common/constants/jwt.constants");
const microservice_constants_1 = require("../common/constants/microservice.constants");
const jwt_auth_guard_1 = require("../common/guards/jwt-auth.guard");
const auth_client_service_1 = require("../common/services/auth-client.service");
const auth_controller_1 = require("./auth/auth.controller");
const health_controller_1 = require("./health/health.controller");
const users_controller_1 = require("./users/users.controller");
let GatewayModule = class GatewayModule {
};
exports.GatewayModule = GatewayModule;
exports.GatewayModule = GatewayModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([microservice_constants_1.AUTH_SERVICE_TCP_OPTIONS]),
            jwt_1.JwtModule.register({ secret: jwt_constants_1.JWT_SECRET }),
        ],
        controllers: [health_controller_1.HealthController, auth_controller_1.AuthController, users_controller_1.UsersController],
        providers: [auth_client_service_1.AuthClientService, jwt_auth_guard_1.JwtAuthGuard],
    })
], GatewayModule);
//# sourceMappingURL=gateway.module.js.map