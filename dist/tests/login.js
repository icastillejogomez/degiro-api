"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = __importDefault(require("./../main"));
var degiro = new main_1.default({
    username: 'nachoogoomezomg',
    pwd: process.env.DEGIRO_PWD,
});
degiro.login()
    .then(function () {
    console.log('Loggin success');
})
    .catch(function (error) {
    throw new Error(error);
});
//# sourceMappingURL=login.js.map