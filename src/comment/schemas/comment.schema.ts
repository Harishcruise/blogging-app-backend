import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, Length, IsDateString} from 'class-validator';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from '../../user/schemas/user.schema';
import { Transform, Type } from 'class-transformer';
import { BlogPost } from 'src/blog-post/schemas/blog-post.schema';

export type commentDocument = HydratedDocument<Comment>;

@Schema()
export class  Comment{
 
    @ApiProperty()
    @IsNotEmpty()
    @Prop({required:true})
    comment : string;
 
    @ApiProperty()
    @IsNotEmpty()
    @Prop({required:true,type: mongoose.Schema.Types.ObjectId, ref: User.name})
    @Type(()=> User)
    commenterName : User;
 
    @ApiProperty()
    @IsNotEmpty()
    @IsDateString()
    @Prop({required:true})
    creationDate : Date;

    @ApiProperty()
    @IsNotEmpty()
    @Prop({required:true,type: mongoose.Schema.Types.ObjectId, ref: BlogPost.name})
    @Type(()=> BlogPost)
    blogPost : BlogPost;
}

export const commentSchema = SchemaFactory.createForClass(Comment);