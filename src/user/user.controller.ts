import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){

    }

    @ApiProperty()
    @Get()
    user(): string{
        return "Hello"
    }

    @ApiProperty()
    @Post("/register")
    userRegister(@Body() userDto: User):Promise<User>{
        return this.userService.createUser(userDto);
    }
}
