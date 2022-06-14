import { configureStore } from "@reduxjs/toolkit";
import usersReducers from "../action/GetUsers";
import userDetailReducers from "../action/GetUserDetail";

export const store = configureStore({
  reducer: {
    users: usersReducers,
    userDetail: userDetailReducers,
  },
});

export default store;
