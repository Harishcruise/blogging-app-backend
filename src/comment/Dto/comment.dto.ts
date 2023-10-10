import { Prop } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDateString, IsNotEmpty } from "class-validator";
import mongoose from "mongoose";
import { BlogPost } from "src/blog-post/schemas/blog-post.schema";
import { User } from "src/user/schemas/user.schema";

export class  CommentDto{
 
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