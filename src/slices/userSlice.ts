import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  accessToken: string | null;
}

// Define the initial state using that type
const initialState: UserState = {
  accessToken: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
    resetUser: (state, action: PayloadAction) => {
      state.accessToken = null;
    },
  },
});

export const { setAccessToken, resetUser } = userSlice.actions;
export default userSlice.reducer;
