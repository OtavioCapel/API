import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://empresa-gtd:1wIZBlJdcCpryXhC@cluster0.1bsze.mongodb.net/?retryWrites=true&w=majority'
    ),
    UsersModule,
    AuthModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}