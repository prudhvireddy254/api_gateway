"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const commands_1 = require("../../common/constants/commands");
const auth_client_service_1 = require("../../common/services/auth-client.service");
let UsersController = class UsersController {
    authClient;
    constructor(authClient) {
        this.authClient = authClient;
    }
    async getProfile(username) {
        try {
            return await this.authClient.send(commands_1.Commands.GET_PROFILE, username);
        }
        catch (err) {
            throw new common_1.NotFoundException(this.message(err));
        }
    }
    async updateProfile(body) {
        try {
            return await this.authClient.send(commands_1.Commands.UPDATE_PROFILE, body);
        }
        catch (err) {
            throw new common_1.BadRequestException(this.message(err));
        }
    }
    async completeOnboarding(body) {
        try {
            return await this.authClient.send(commands_1.Commands.COMPLETE_ONBOARDING, body);
        }
        catch (err) {
            throw new common_1.BadRequestException(this.message(err));
        }
    }
    message(err) {
        return err instanceof Error ? err.message : 'Request failed';
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)(':username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Put)('profile'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Post)('onboarding/complete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "completeOnboarding", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [auth_client_service_1.AuthClientService])
], UsersController);
//# sourceMappingURL=users.controller.js.map