import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    create(createUserDto: CreateUserDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
export declare class BaseService {
    private readonly serviceA;
    constructor(serviceA: ServiceA);
    getHello(): string;
    doSomeFuncFromA(): string;
}
export declare class ServiceA {
    getHello(): string;
}
export declare class ServiceB extends BaseService {
    getHello(): string;
}
