import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, Length, IsDateString} from 'class-validator';


export class LoginAuthDto{
 
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    @Prop({required:true,unique:true})
    email : string;
 
    @ApiProperty()
    @IsNotEmpty()
    @Length(8)
    @Prop({required:true})
    password : string;
 
}