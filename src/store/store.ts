import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/UserSlice";
import channelReducer from "./slice/ChannelSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    channel: channelReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
