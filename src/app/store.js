import { configureStore } from '@reduxjs/toolkit'
import postsReducer from "../features/post/postSlice"
import usersReducer from "../features/users/usersSlice"
export const store = configureStore({
    reducer: {
      posts:postsReducer,
      users:usersReducer
    },
  })