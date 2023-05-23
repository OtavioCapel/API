import { Controller, Get, UseGuards, Request, Post, Param, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthGuardDecodeJWT } from 'src/shared/guards/auth.guard';
import { FriendsService } from './friends.service';


@Controller('friends')
@UseGuards(AuthGuard('jwt'))
export class FriendsController {
  constructor(private readonly friendsService: FriendsService) {}


  @Get('/followers')
  @UseGuards(AuthGuardDecodeJWT) 
  getFollowersList(@Request() req) {
    // JWT sub is user._id
    return this.friendsService.getFollowersList(req.user.sub);
  }

  @Get('/following')
  @UseGuards(AuthGuardDecodeJWT) 
  getFollowingList(@Request() req) {
    return this.friendsService.getFollowingList(req.user.sub);
  }

  @Post(':followUserId')
  @UseGuards(AuthGuardDecodeJWT)
  followUser(@Request() req, @Param() { followUserId }) {
    return this.friendsService.followUserById(req.user.sub, followUserId);
  }

}
