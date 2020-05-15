import { Document } from 'mongoose';

export interface ICharacter extends Document {
  name: string;
  gender: string;
  culture: string;
  image?: string;
  allegiance: string[];
  createdAt?: any;
  updatedAt?: any;
}