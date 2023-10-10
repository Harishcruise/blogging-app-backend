import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './schemas/comment.schema';
import mongoose, { Model } from 'mongoose';
import { CommentDto } from './Dto/comment.dto';

@Injectable()
export class CommentService {
    constructor(@InjectModel(Comment.name) private commentModel: Model<Comment>){

    }

    async createComment(commentDto: CommentDto):Promise<Comment>{
        const comment = new this.commentModel(commentDto);
        return comment.save();
    }

    async findAllComment():Promise<Comment[]>{
        return this.commentModel.find().populate('blogPost').populate('commenterName');
    }

    async findCommentByPostId(id :string):Promise<Comment[]>{
        const ID = new mongoose.Types.ObjectId(id);
        return this.commentModel.find({blogPost:ID}).populate('blogPost').populate('commenterName');
    }

    async findCommentById(id:string):Promise<Comment[]>{
        const ID = new mongoose.Types.ObjectId(id);
        return this.commentModel.find({_id:ID}).populate('blogPost').populate('commenterName');
    }

    async removeCommentById(id:string){
        return this.commentModel.findByIdAndRemove(new mongoose.Types.ObjectId(id));
    }

    async updateCommentById(id:string, comment:CommentDto){
        return this.commentModel.findByIdAndUpdate(new mongoose.Types.ObjectId(id),comment);
    }
}
