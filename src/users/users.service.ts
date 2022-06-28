import * as uuid from 'uuid';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// @Injectable()
// export class UsersService {
//   async create(createUserDto: CreateUserDto) {
//     return 'This action adds a new user';
//   }

//   findAll() {
//     return `This action returns all users`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} user`;
//   }

//   update(id: number, updateUserDto: UpdateUserDto) {
//     return `This action updates a #${id} user`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} user`;
//   }
// }

// provider example
// export class BaseService {
//   constructor(private readonly serviceA: ServiceA) {}

//   getHello(): string {
//     return 'Hello World BASE!';
//   }

//   doSomeFuncFromA(): string {
//     return this.serviceA.getHello();
//   }
// }

// @Injectable()
// export class ServiceA {
//   getHello(): string {
//     return 'Hello World A!';
//   }
// }

// @Injectable()
// export class ServiceB extends BaseService {
//   getHello(): string {
//     return this.doSomeFuncFromA();
//   }
// }

@Injectable()
export class UsersService {
	async createUser(createUserDto: CreateUserDto): Promise<void> {
		const { name, email, password } = createUserDto;
		await this.checkUserExists(email);
		
		const signupVerifyToken = uuid.v1();
		
		await this.saveUser(name, email, password, signupVerifyToken);
    	await this.sendMemberJoinEmail(email, signupVerifyToken);
	}
	
	private checkUserExists(email: string) {
		return false;
	}
	
	private saveUser(name: string, email: string, password: string, signupVerifyToken: string){
		return; //TODO
	}
	
	private async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
		await this.emailService.sendMemberJoinVerification(email, signupVerifyToken);
	}
}