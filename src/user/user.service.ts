import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { UserDto, UserResponseMongoDto } from './Dto/user.dto';
import mongoose, { Model } from 'mongoose';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>){

    }
    
    async createUser(userDto:UserDto):Promise<UserDto>{

       const existingUser = await this.findByEmail(userDto.email);
       if (existingUser) {
        throw new HttpException('User with this email already exists',400)
       }

        const cryptedPassword = await bcrypt.hash(userDto.password,15);
        const createdUser = new this.userModel({
            ...userDto,
            password:cryptedPassword,
        });
        return createdUser.save();
    }

    async findAllUser():Promise<UserResponseMongoDto[]>{
        return this.userModel.find();
    }

    async findByUserId(id:string):Promise<UserResponseMongoDto>{
        return this.userModel.findById(new mongoose.Types.ObjectId(id));
    }

    async findByEmail(email:string):Promise<UserResponseMongoDto>{
        return this.userModel.findOne({email:email});
    }

    async removeUser(id:string){
        this.userModel.updateOne()
        return this.userModel.findByIdAndRemove(new mongoose.Types.ObjectId(id));
    }

    async updateUser(id:string,userDto:UserDto){
        const hashedPassword = await bcrypt.hash(userDto.password,15);
        userDto.password = hashedPassword;
        return await this.userModel.findByIdAndUpdate(new mongoose.Types.ObjectId(id),userDto);
    }

}
