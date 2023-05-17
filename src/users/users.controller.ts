import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserResponseDto } from './dto/user-response.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport/dist';
import { UserUpdateDto } from './dto/user-update.dto';

@Controller('users')
//@UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: UserResponseDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get(':id')
  findById(@Param() { id } ) {
    return this.usersService.findById(id);
  }

  @Put()
  updateUser(@Body() updateUserDto: UserUpdateDto){
    return this.usersService.update(updateUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
