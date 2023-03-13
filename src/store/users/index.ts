import { Notification } from '@constants';
import { openNotification, validateUpsertUser } from '@helpers';
import { createSlice } from '@reduxjs/toolkit';

import { getUsers } from './service';
import type { GetUsersData } from './type';

const initialState: GetUsersData = {
  loading: false,
  loaded: false,
  data: [],
  error: '',
};

const { reducer, actions } = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    createUser: (state, action) => {
      const { login, bio, location } = action.payload;
      const nextId = +state.data[state.data.length - 1]?.id || 0;
      const userData = { id: nextId + 1, login, bio, location };

      if (validateUpsertUser(state.data, userData)) {
        openNotification({
          type: Notification.Fail,
          message: 'Please choose another name',
        });
      } else {
        state.data = state.data.concat([userData]);
        openNotification({
          message: 'Create user success',
        });
      }
    },
    updateUser: (state, action) => {
      if (validateUpsertUser(state.data, action.payload)) {
        openNotification({
          type: Notification.Fail,
          message: 'Please choose another name',
        });
      } else {
        const { id, login, location, bio } = action.payload;
        const userUpdate = state.data.find((item) => `${item.id}` === id);
        if (userUpdate) {
          userUpdate.login = login;
          userUpdate.location = location;
          userUpdate.bio = bio;
        }
        openNotification({
          message: 'Update user success',
        });
      }
    },
  },
  extraReducers: (builder) => {
    // GET USERS
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
      state.loaded = false;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.data = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.error = action.error.message || '';
    });
  },
});

export { actions };
export default reducer;
