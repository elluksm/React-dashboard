import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "./store";

interface UserInfoState {
  email: string;
}

const initialState: UserInfoState = {
  email: "",
};

export const userInfo = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { setUserEmail } = userInfo.actions;

export const register = (
  userEmail: string,
  userPassword: string
): AppThunk => async (dispatch) => {
  try {
    const response = await fetch(`https://interview.loadero.com/register/`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    });
    dispatch(setUserEmail(userEmail));
  } catch (err) {
    console.log(err);
    console.log("Error occurred - please try again.");
  }
};

export const email = (state: RootState) => state.userInfo.email;

export default userInfo.reducer;
