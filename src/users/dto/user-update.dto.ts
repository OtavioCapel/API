import { Friend } from "src/shared/models/friends";

export class UserUpdateDto {
  _id: string
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
