import { configureStore } from "@reduxjs/toolkit";
import arithReducer from "./arithSlice";

export const store = configureStore({
    reducer : {
        arith : arithReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;