import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserResponseDto } from './dto/user-response.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  createUser(dto: UserResponseDto) {
    const newUser = new this.userModel(dto);
    return newUser.save();
  }

  findAll() {
    return this.userModel.find().exec();
  }
}
