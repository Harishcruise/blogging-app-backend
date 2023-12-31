import { Module } from '@nestjs/common';
import { BlogPostController } from './blog-post.controller';
import { BlogPostService } from './blog-post.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogPost, blogPostSchema } from './schemas/blog-post.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: BlogPost.name, schema: blogPostSchema }])],
  controllers: [BlogPostController],
  providers: [BlogPostService]
})
export class BlogPostModule {}
