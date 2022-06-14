export class CreateUserDto {
	// V1
	// name: string;
	// email: string;
	
	// V2
	readonly name: string;
	readonly email: string;
	readonly password: string;
}

export class GetUsersDto {
	offset: number;
	limit: number;
}