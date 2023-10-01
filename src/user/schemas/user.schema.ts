import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, Length, IsDateString} from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type userDocument = HydratedDocument<User>;

@Schema()
export class User{

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
   @Length(15)
   @Prop({required:true})
   password : string;

   @ApiProperty()
   @IsNotEmpty()
   @IsDateString()
   @Prop({required:true})
   date : Date;
}

export const userSchema = SchemaFactory.createForClass(User);