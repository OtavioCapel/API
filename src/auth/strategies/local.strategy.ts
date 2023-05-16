import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { MessagesHelper } from 'src/shared/helpers/message.helper'
import { AuthService } from '../auth.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly authService: AuthService) {
        super({ usernameField: 'email' })
    }

    async validate(email: string, password: string) {
        const user = this.authService.userAuthenticate(email, password);

        if(!user) throw new UnauthorizedException(MessagesHelper.INVALID_CREDENTIALS);

        return user;
    }

}