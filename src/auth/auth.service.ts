import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MessagesHelper } from 'src/shared/helpers/message.helper';
import { UserResponseDto } from 'src/users/dto/user-response.dto';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from '../users/users.service';


@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async userAuthenticate(email: string, password: string) {
    let user: User;

    try {
      user = await this.usersService.findByEmail(email)
    } catch (error) {
      return null
    }

    if(password !== user.password) return null;

    return user;
  }

  login(user: User) {
    const payload = { sub: user._id, email: user.email }
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
