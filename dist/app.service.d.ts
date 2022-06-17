export declare class AppService {
    getHello(): string;
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
