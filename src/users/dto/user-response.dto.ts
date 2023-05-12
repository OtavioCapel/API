import { Friend } from "src/shared/models/friends";

export class UserResponseDto {
  name: string;
  email: string;
  password?: string;
  username: string;
  followers: Array<Friend>;
  following: Array<Friend>;
  followersQuantity: number;
  followingQuantity: number;
  closedFriends?: Array<Friend>;
  createdAt: Date;
}
