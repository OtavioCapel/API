import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) {}
    
    @Post()
    authUser(@Body() { email, password }) {
      return this.authService.userAuthenticate(email, password)
    }
}
