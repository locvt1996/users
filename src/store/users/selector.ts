import { RootState } from "../";
import { UserItem } from "./type";

export const getUsersData = (state: RootState) => {
  return state.users;
};

export const getUserInfo =
  (userId?: number | string) =>
  (state: RootState): UserItem => {
    const userInfo = state.users.data.find((item) => `${item.id}` === userId);

    return userInfo || ({} as UserItem);
  };
