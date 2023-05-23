import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserResponseDto } from './dto/user-response.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport/dist';
import { UserUpdateDto } from './dto/user-update.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: UserResponseDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findById(@Param() { id } ) {
    return this.usersService.findById(id);
  }

  @Put()
  @UseGuards(AuthGuard('jwt'))
  updateUser(@Body() updateUserDto: UserUpdateDto){
    return this.usersService.update(updateUserDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.usersService.findAll();
  }
}
