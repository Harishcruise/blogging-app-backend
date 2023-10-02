import { Injectable, HttpException } from '@nestjs/common';
import { UserDto } from 'src/user/Dto/user.dto';
import { UserService } from 'src/user/user.service';
import { LoginAuthDto } from './Dto/auth.dto';
import * as bcrypt from 'bcrypt' 

@Injectable()
export class AuthService {
    constructor(private readonly userService:UserService){

    }

    async register(userDto:UserDto):Promise<UserDto>{
        return this.userService.createUser(userDto);
    }

    async login(loginData:LoginAuthDto){
        const user = await this.userService.findByEmail(loginData.email);
        
        if (!user || !(await bcrypt.compare(loginData.password, user.password))) {
            throw new HttpException('Invalid credentials',401);
          }

        return {status:"Success"}  

    }
}
