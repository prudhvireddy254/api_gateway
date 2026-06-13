"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET = void 0;
if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is not set. Add it to your .env file.');
}
exports.JWT_SECRET = process.env.JWT_SECRET;
//# sourceMappingURL=jwt.constants.js.map