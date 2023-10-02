import { Controller, Post, Get, Body } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/user/Dto/user.dto';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './Dto/auth.dto';

@ApiTags("Authentication")
@Controller('auth')
export class AuthController {

    constructor(private readonly authService : AuthService){

    }
 
    @ApiProperty()
    @Post('register')
    register(@Body() userDto:UserDto):Promise<UserDto>{
        return this.authService.register(userDto);
    }

    @ApiProperty()
    @Post('login')
    login(@Body() loginDto:LoginAuthDto){
        return this.authService.login(loginDto);
    }

}
