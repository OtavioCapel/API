import { Friend } from "src/shared/models/friends";

export class UserResponseDto {
  name: string;
  email: string;
  profilePicture: any;
  photos: Array<any>;
  password?: string;
  username: string;
  followers: Array<Friend>;
  following: Array<Friend>;
  active: boolean;
  closedFriends?: Array<Friend>;
  createdAt: Date;
}
