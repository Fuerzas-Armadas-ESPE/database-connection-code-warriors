import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PostDTOSchema } from './post.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel('Post') private readonly postModel: Model<any>) {}

  async getAllPosts(): Promise<any[]> {
    return await this.postModel.find().exec();
  }

  async getPost(id: string): Promise<any | null> {
    return await this.postModel.findById(id).exec();
  }

  async createPost(postData: typeof PostDTOSchema): Promise<any> {
    try {
      const createdPost = new this.postModel(postData);
      return await createdPost.save();
    } catch (error: any) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async updatePost(id: string, postData: any): Promise<any | null> {
    // Implementa el método de actualización si es necesario
    const updated = await this.postModel.findByIdAndUpdate(id, postData)
  }

  async deletePost(id: string): Promise<void> {
    // Implementa el método de eliminación si es necesario

    const deleted = await this.postModel.findByIdAndDelete(id);
    return deleted;
  }
}
