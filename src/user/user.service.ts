import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>){

    }
    
    async createUser(userDto:User):Promise<User>{

       const existingUser = await this.userModel.findOne({email:userDto.email});
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

}
