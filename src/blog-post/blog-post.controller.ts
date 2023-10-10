import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiParam, ApiProperty, ApiTags } from '@nestjs/swagger';
import { BlogPostService } from './blog-post.service';
import { BlogPost } from './schemas/blog-post.schema';
import { UserDto, UserResponseMongoDto } from 'src/user/Dto/user.dto';

@ApiTags('blog-post')
@Controller('blog-post')
export class BlogPostController {
    constructor(private readonly blogPostService:BlogPostService){

    }

    @ApiProperty()
    @Get()
    getBlog(): Promise<BlogPost[]>{
        return this.blogPostService.findAllPost();
    }

    @ApiProperty()
    @ApiParam({name: 'id'})
    @Get(':id')
    getBlogById(@Param() id:string){
        return this.blogPostService.findPostById(id);
    }

    @ApiProperty()
    @ApiParam({name: 'id'})
    @Get('user/:id')
    getBlogByUserId(@Param() id:string):Promise<BlogPost[]>{
        return this.blogPostService.findPostByUserId(id);
    }

    @ApiProperty()
    @Post()
    postBlog(@Body() blogDto:BlogPost): Promise<BlogPost>{
        return this.blogPostService.createBlogPost(blogDto);
    }

    @ApiProperty()
    @ApiParam({name: 'id'})
    @Put(':id')
    blogUpdate(@Param() id:string, @Body() blogDto:BlogPost){
        return this.blogPostService.updatePostById(id,blogDto);
    }

    @ApiProperty()
    @ApiParam({name: 'id'})
    @Delete(':id')
    removeBlogById(@Param() id:string){
        return this.blogPostService.removePostById(id);
    }
    


}
