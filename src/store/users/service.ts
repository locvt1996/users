import { createAsyncThunk } from '@reduxjs/toolkit';

import type { UserItem } from './type';

export const getUsers = createAsyncThunk<UserItem[]>('users', async (_, thunkApi) => {
  try {
    const response = await fetch('https://api.github.com/users');
    const data = await response.json();
    return data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error?.response);
  }
});
