import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BlogPost } from './schemas/blog-post.schema';
import mongoose, { Model } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';
import { UserResponseMongoDto } from 'src/user/Dto/user.dto';

@Injectable()
export class BlogPostService {
    constructor(@InjectModel(BlogPost.name) private blogPostModel: Model<BlogPost> ){

    }

    async createBlogPost(postDto: BlogPost):Promise<BlogPost>{
        const post = new this.blogPostModel(postDto);

        return post.save();
    }

    async findAllPost(){
        return this.blogPostModel.find().populate('author');
    }

    async findPostById(id:string){
        return this.blogPostModel.findById(new mongoose.Types.ObjectId(id));
    }

    async findPostByUserId(id:string):Promise<BlogPost[]>{
        const ID = new mongoose.Types.ObjectId(id);
        return this.blogPostModel.find({author:ID});
    }

    async removePostById(id:string){
        return this.blogPostModel.findByIdAndRemove(new mongoose.Types.ObjectId(id));
    }

    async updatePostById(id:string,blogDto:BlogPost){
        return await this.blogPostModel.findByIdAndUpdate(new mongoose.Types.ObjectId(id),blogDto);
    }

}
