import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { MessagesHelper } from 'src/shared/helpers/message.helper'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { AuthService } from '../auth.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  constructor(private readonly authService: AuthService) {
    super({ 
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // extrai o token do header
      ignoreExpiration: false, // não ignora caso o token esteja expirado
      secretOrKey: 'topSecret512'
    })
  }

  async validate(payload: any) {
    return { id: payload.id, email: payload.email }
  }

}