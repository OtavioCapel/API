import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/entities/user.entity';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'topSecret512',
      signOptions: { expiresIn: '60s' }
    }), 
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [AuthController],
  providers: [AuthService, UsersService],
  exports: [AuthService]
})
export class AuthModule {}
