import { configureStore } from "@reduxjs/toolkit";
import loginModal from "./store/modal";

export default configureStore({
  reducer: {
    loginModal: loginModal.reducer,
  },
});
