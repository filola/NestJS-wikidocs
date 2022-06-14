// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
// 	Query,
//   Delete,
//   Res,
//   HttpCode,
//   BadRequestException,
//   Header,
// } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

// @Controller('users')
// export class UsersController {
//   constructor(private readonly usersService: UsersService) {}
  
//   @Post()
//   create(@Body() CreateUserDto: CreateUserDto, @Res() res) {
//     const { name, email } = CreateUserDto;

//     return res.status(201).send(`유저를 생성했습니다. 이름 : ${name}, 이메일: ${email}`);
// }

//   @Get()
//   findAll(@Res() res) {
//     const users = this.usersService.findAll();

//     return res.status(200).send(users);
//   }

//   @Header('Custom', 'Test Header')
//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     if (+id < 1) {
//       throw new BadRequestException('id lower then 0');
//     }
//     return this.usersService.findOne(+id);
//   }

//   @HttpCode(202)
//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
//     return this.usersService.update(+id, updateUserDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.usersService.remove(+id);
//   }
	
//   @Delete(':userId/memo/:memoId')
//   deleteUserMemo(
//     @Param('userId') userId: string,
//     @Param('memoId') memoId: string,
//   ) {
//     return `userId: ${userId}, memoId: ${memoId}`;
//   }
// }

// V2
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
// import { UserInfo } from './UserInfo';

@Controller('users')
export class UsersController {
  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    console.log(dto);
  }

  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    console.log(dto);
    return;
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    console.log(dto);
    return;
  }

  @Get('/:id')
  async getUserInfo(@Param('id') userId: string): Promise<void> {
    console.log(userId);
    return;
  }
}