import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";
import counterCReducer from "./counterC-slice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    counterC: counterCReducer,
    auth: authReducer,
  },
});

export default store;
