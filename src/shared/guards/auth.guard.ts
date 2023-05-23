import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuardDecodeJWT implements CanActivate {
constructor(private jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);

        if (!token) {
            throw new UnauthorizedException();
        }
        try {
            const payload = await this.jwtService.verifyAsync(
                token,
                { secret: 'topSecret512' }
            );
            
            // request.user is current logged user;
            request['user'] = payload;
        } catch {
            throw new UnauthorizedException();
        }
        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        // '??'  is The Nullish Coalescing Operator, return the first argument case i'snt null, otherwise return the second argument
        const [type, token] = request.headers.authorization?.split(' ') ?? []; 
        return type === 'Bearer' ? token : undefined;
    }
}