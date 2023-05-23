import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  
  _id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ default: true })
  active: boolean;

  @Prop({ required: true, unique: true })
  email: string;
  
  @Prop()
  profilePicture: string;

  @Prop()
  photos: Array<any>;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ default: [] }) // TO DO - reference to another schema
  followers: Array<any>;

  @Prop({ default: [] }) // TO DO - reference to another schema 
  following: Array<any>;

  @Prop({ default: [] }) // TO DO - reference to another schema 
  closedFriends: Array<any>;

  @Prop({ default: Date.now() }) 
  createdAt: Date;
  
}

export const UserSchema = SchemaFactory.createForClass(User);
