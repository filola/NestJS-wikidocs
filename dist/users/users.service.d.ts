import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    createUser(createUserDto: CreateUserDto): Promise<void>;
    private checkUserExists;
    private saveUser;
    private sendMemberJoinEmail;
}
