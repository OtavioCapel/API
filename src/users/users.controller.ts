import { Body, Controller, Request, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserResponseDto } from './dto/user-response.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport/dist';
import { UserUpdateDto } from './dto/user-update.dto';
import { AuthGuardDecodeJWT } from 'src/shared/guards/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: UserResponseDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get(':id')
  @UseGuards(AuthGuardDecodeJWT) //AuthGuardDecodeJWT Auth do decode JWT inside in req.headers
  @UseGuards(AuthGuard('jwt'))
  findById(@Param() { id }, @Request() req ) {
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
