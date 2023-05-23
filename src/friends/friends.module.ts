import { Module } from '@nestjs/common';
import { FriendsService } from './friends.service';
import { FriendsController } from './friends.controller';
import { User, UserSchema } from 'src/users/entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [FriendsController],
  providers: [FriendsService],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])

  ]
})
export class FriendsModule {}
