import { Body, Controller, Get, Post, Param, Delete, Put } from '@nestjs/common';
import { ApiParam, ApiProperty, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserDto, UserResponseMongoDto } from './Dto/user.dto';

@ApiTags('User')
@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){

    }

    @ApiProperty()
    @Get()
    user(): Promise<UserResponseMongoDto[]>{
        return this.userService.findAllUser();
    }

    @ApiProperty()
    @ApiParam({name: 'id'})
    @Get(':id')
    userId(@Param() id:string): Promise<UserResponseMongoDto>{
        return this.userService.findByUserId(id)
    }

    @ApiProperty()
    @ApiParam({name: 'id'})
    @Put(':id')
    userUpdate(@Param() id:string, @Body() userDto:UserDto){
        return this.userService.updateUser(id,userDto);
    }

    @ApiProperty()
    @ApiParam({name: 'id'})
    @Delete(':id')
    userRemove(@Param() id:string){
        return this.userService.removeUser(id);
    }
}
