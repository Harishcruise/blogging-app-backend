import { Prop, Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDateString, IsNotEmpty } from "class-validator";
import mongoose from "mongoose";
import { User } from "src/user/schemas/user.schema";


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