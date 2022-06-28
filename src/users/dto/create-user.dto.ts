export class CreateUserDto {
	// V1
	// name: string;
	// email: string;
	
	// V2
	name: string;
	email: string;
	password: string;
}

export class GetUsersDto {
	offset: number;
	limit: number;
}