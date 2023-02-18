import { FetchingData } from "../type";

export type UserItem = {
  id: number | string;
  login: string;
  avatar_url?: string;
  url?: string;
  type?: string;
  bio?: string;
  location?: string;
};

export type GetUsersData = FetchingData<UserItem[]>;
