import { createSlice } from "@reduxjs/toolkit";

let loginModal = createSlice({
  name: "loginModal",
  initialState: false,
  reducers: {
    changeLoginMode(state, action) {
      return (state = action.payload);
    },
  },
});

export let { changeLoginMode } = loginModal.actions;

export default loginModal;
