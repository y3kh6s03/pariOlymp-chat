import { createSlice } from "@reduxjs/toolkit";

export interface ChannelState {
  channelId: string | null;
  channelName: string | null;
}

const initialState: ChannelState = {
  channelId: null,
  channelName: null,
};

const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    setChannelInfo(state, action) {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
  },
});
export const { setChannelInfo } = channelSlice.actions;
export default channelSlice.reducer;
