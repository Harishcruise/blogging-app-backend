
import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, Length, IsDateString} from 'class-validator';

export class UserDto{

    @ApiProperty()
    @IsNotEmpty()
    @Prop({required:true,unique:true})
    username : string;
 
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
 
    @ApiProperty()
    @IsNotEmpty()
    @IsDateString()
    @Prop({required:true})
    date : Date;
}


export class UserResponseMongoDto{


    @ApiProperty()
    @IsNotEmpty()
    @Prop({required:true,unique:true})
    _id : string;

    @ApiProperty()
    @IsNotEmpty()
    @Prop({required:true,unique:true})
    username : string;
 
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
 
    @ApiProperty()
    @IsNotEmpty()
    @IsDateString()
    @Prop({required:true})
    date : Date;
}

