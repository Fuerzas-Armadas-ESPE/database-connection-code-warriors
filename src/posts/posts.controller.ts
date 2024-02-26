import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { RequestLogDocument } from '../modules/request-log/request-log.shema'; // Importa el tipo de documento del esquema de registro de solicitudes
import { PostSchema } from './post.model';
import { PostDTOSchema } from './post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getAllPosts(): Promise<RequestLogDocument[]> {
    // Usa el tipo de documento del esquema de registro de solicitudes
    return this.postsService.getAllPosts();
  }


  @Post()
  async createNewPost(@Body() post : typeof PostSchema) {
    this.postsService.createPost(post)
  }

  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() postUpdated : typeof PostDTOSchema) {
    this.postsService.updatePost(id, postUpdated)
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    this.postsService.deletePost(id)
  }
}
