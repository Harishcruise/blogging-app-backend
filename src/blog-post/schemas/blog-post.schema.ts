import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, Length, IsDateString} from 'class-validator';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from '../../user/schemas/user.schema';
import { Transform, Type } from 'class-transformer';

export type blogPostDocument = HydratedDocument<BlogPost>;

@Schema()
export class  BlogPost{
    @ApiProperty()
    @IsNotEmpty()
    @Prop({required:true})
    title : string;
 
    @ApiProperty()
    @IsNotEmpty()
    @Prop({required:true})
    content : string;
 
    @ApiProperty()
    @IsNotEmpty()
    @Prop({required:true,type: mongoose.Schema.Types.ObjectId, ref: User.name})
    @Type(()=> User)
    author : User;
 
    @ApiProperty()
    @IsNotEmpty()
    @IsDateString()
    @Prop({required:true})
    creationDate : Date;

    @ApiProperty()
    @IsNotEmpty()
    @Prop()
    tags : string[];
}

export const blogPostSchema = SchemaFactory.createForClass(BlogPost);