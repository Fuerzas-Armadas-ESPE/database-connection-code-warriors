import { Schema } from 'mongoose';

export const PostDTOSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});
