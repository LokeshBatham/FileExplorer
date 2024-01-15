import { configureStore } from "@reduxjs/toolkit";
import  Quick  from "./slices/UserSlice";

const store = configureStore({
    reducer: {
        QuickAccess: Quick
    }
})

export default store