import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CommentService } from './comment.service';
import { ApiParam, ApiProperty, ApiTags } from '@nestjs/swagger';
import { Comment } from './schemas/comment.schema';
import { CommentDto } from './Dto/comment.dto';

@ApiTags('comment')
@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService){

    }

    @ApiProperty()
    @Get()
    
    findAllComment():Promise<Comment[]>{
        return this.commentService.findAllComment();
    }

    @ApiProperty()
    @ApiParam({name: 'id'})
    @Get(':id')
    findCommentById(@Param() id:string):Promise<Comment[]>{
        return this.commentService.findCommentById(id);
    }

    @ApiProperty()
    @ApiParam({name: 'id'})
    @Get('blog-post/:id')
    findCommentByPostId(@Param() id:string):Promise<Comment[]>{
        return this.commentService.findCommentByPostId(id);
    }

    @ApiProperty()
    @Post()
    createComment(@Body() comment:CommentDto):Promise<Comment>{
        return this.commentService.createComment(comment);
    }

    @ApiProperty()
    @ApiParam({name: 'id'})
    @Put(':id')
    updateCommentById(@Param() id:string, @Body() comment:CommentDto){
        return this.commentService.updateCommentById(id,comment);
    }

    @ApiProperty()
    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteCommentById(@Param() id:string){
        return this.commentService.removeCommentById(id);
    }

}
