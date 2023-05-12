import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserResponseDto } from 'src/users/dto/user-response.dto';
import { UsersService } from '../users/users.service';


@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private jwtService: JwtService,
        ) {}

    async userAuthenticate(email: string, password: string) {
      console.log('aquii auth service');
      const user = await this.usersService.findByEmail(email)
      console.log(user)
      if(!user) {
        // error handling
      }

      if(password === user.password) {
        console.log('>>>>>.', this.generateTokenJWT({ sub:user._id, email: user.email }));
        
      }
    }

    generateTokenJWT(payload) {
        return {
            access_token: this.jwtService.sign(payload),
          };
    }
}
