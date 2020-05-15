// import * as mongoose from 'mongoose';
import mongoose, { Schema, Document } from 'mongoose';
import mongoosePaginate from "mongoose-paginate";
import { ICharacter } from "./interface";

const CharacterSchema: Schema = new Schema({
  name: { type: String, required: true },
  gender: { type: String, required: false },
  culture: { type: String, required: false },
  alive: { type: Boolean, default: true },
  image: { type: String, required: false },
  allegiance: [{ type: String, required: false }],
  createdAt: {type: Date, "default": Date.now},
  updatedAt: {type: Date, "default": Date.now},
});
CharacterSchema.plugin(mongoosePaginate);

const CharacterModel = mongoose.model<ICharacter>('Character', CharacterSchema);
export default CharacterModel;