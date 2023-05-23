import { Injectable, NotFoundException } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserResponseDto } from './dto/user-response.dto';
import { User } from './entities/user.entity';
import { hashSync } from 'bcrypt';
import { MessagesHelper } from 'src/shared/helpers/message.helper';
import { UserUpdateDto } from './dto/user-update.dto';
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async createUser(dto: UserResponseDto) {
    const emailAlreadyInUse = await this.findByEmail(dto.email);
    if(emailAlreadyInUse) {
      throw new BadRequestException(MessagesHelper.EMAIL_ALREADY_IN_USE);
    }
    const newUser = new this.userModel(dto);
    const saltRounds = 10;
    newUser.password = hashSync(newUser.password, saltRounds);
    return newUser.save();
  }

  async findByEmail(email: string) {
    return await this.userModel.findOne({ email }).exec();
  }

  async update(userToUpdate: UserUpdateDto) {
    return await this.userModel.findByIdAndUpdate(userToUpdate._id, userToUpdate )
  }

  async findById(_id: string) {
    try {
      return await this.userModel.findOne({ _id }).exec();
    } catch (error) {
      throw new NotFoundException(MessagesHelper.USER_NOT_FOUND);
    }
  }

  async findAll() {
    return await this.userModel.find();
  }

  async uploadImage(file) {
    console.log(file);
  }
}
