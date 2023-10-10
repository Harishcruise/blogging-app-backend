import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { Comment, commentSchema } from './schemas/comment.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{ name: Comment.name, schema: commentSchema }])],
  providers: [CommentService],
  controllers: [CommentController]
})
export class CommentModule {}
