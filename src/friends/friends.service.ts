import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MessagesHelper } from 'src/shared/helpers/message.helper';
import { User } from 'src/users/entities/user.entity';


@Injectable()
export class FriendsService {

  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getFollowersList(currentUserId: string) {
    return  (await this.getCurrentUser(currentUserId)).followers
  }

  async getFollowingList(currentUserId: string) {
    return  (await this.getCurrentUser(currentUserId)).following
  }

  async followUserById(currentUserId: string, userIdFollow: string) {
    const user = await this.getCurrentUser(currentUserId)
    const userToFollow = await this.userModel.findById(userIdFollow);
    
    if(!userToFollow) {
      throw new NotFoundException(MessagesHelper.USER_NOT_FOUND);
    }
    
    user.followers.push({ name: userToFollow.name, _id: userToFollow._id })
    await this.userModel.findByIdAndUpdate(currentUserId, user)
  }

  async getCurrentUser(id): Promise<User> {
    const currentUser = await this.userModel.findById(id);
    
    if(!currentUser) {
      throw new NotFoundException(MessagesHelper.USER_NOT_FOUND);
    }

    return currentUser
  }
}
