import type { UserItem } from '@store/users/type';

export const validateUpsertUser = (listUser: UserItem[], user: UserItem) => {
  return listUser.some((item) => item.id !== user.id && item.login === user.login);
};
