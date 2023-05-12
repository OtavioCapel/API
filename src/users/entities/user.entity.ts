import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop() // TO DO - reference to another schema
  followers: Array<any>;

  @Prop() // TO DO - reference to another schema 
  following: Array<any>;

  @Prop() // TO DO - reference to another schema 
  closedFriends: Array<any>;
  
  @Prop({ default: 0 })
  followersQuantity: number;

  @Prop({ default: 0 }) 
  followingQuantity: number;

  @Prop({ default: Date.now() }) 
  createdAt: Date;
  
}

export const UserSchema = SchemaFactory.createForClass(User);
