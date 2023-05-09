export class UserResponseDto {
  name: string;
  email: string;
  password: string;
  username: string;
  followers: Array<any>;
  following: Array<any>;
  followersQauntity: number;
  followingQuantity: number;
  createdAt: Date;
}
