"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceB = exports.ServiceA = exports.BaseService = exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    create(createUserDto) {
        return 'This action adds a new user';
    }
    findAll() {
        return `This action returns all users`;
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;
class BaseService {
    constructor(serviceA) {
        this.serviceA = serviceA;
    }
    getHello() {
        return 'Hello World BASE!';
    }
    doSomeFuncFromA() {
        return this.serviceA.getHello();
    }
}
exports.BaseService = BaseService;
let ServiceA = class ServiceA {
    getHello() {
        return 'Hello World A!';
    }
};
ServiceA = __decorate([
    (0, common_1.Injectable)()
], ServiceA);
exports.ServiceA = ServiceA;
let ServiceB = class ServiceB extends BaseService {
    getHello() {
        return this.doSomeFuncFromA();
    }
};
ServiceB = __decorate([
    (0, common_1.Injectable)()
], ServiceB);
exports.ServiceB = ServiceB;
//# sourceMappingURL=users.service.js.map