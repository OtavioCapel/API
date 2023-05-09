import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://empresa-gtd:1wIZBlJdcCpryXhC@cluster0.1bsze.mongodb.net/?retryWrites=true&w=majority'
    ),
    UsersModule
  ],
  //imports: [MongooseModule.forRoot('mongodb://localhost/nest'), UsersModule],
  controllers: [],
  providers: []
})
export class AppModule {}