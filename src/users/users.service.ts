import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserResponseDto } from './dto/user-response.dto';
import { User } from './entities/user.entity';
import { hashSync } from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  createUser(dto: UserResponseDto) {
    const newUser = new this.userModel(dto);
    const saltRounds = 10;
    newUser.password = hashSync(newUser.password, saltRounds);
    return newUser.save();
  }

  findByEmail(email: string) {
    return this.userModel.findOne({ email }).exec();
  }

  findAll() {
    return this.userModel.find().exec();
  }
}
