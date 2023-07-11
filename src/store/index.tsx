import {configureStore} from "@reduxjs/toolkit";
import tabSlice from "./tab-slice";

const store = configureStore({
    reducer: {tab: tabSlice.reducer}
})

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;