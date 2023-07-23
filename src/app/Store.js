import { configureStore } from "@reduxjs/toolkit";
import SettingReducer from "./SettingSlice/SettingSlice";
import NotificationReducer from "./SettingSlice/NotificationSlice";

const Store = configureStore({
    reducer:{
        setting: SettingReducer,
        notification: NotificationReducer,
    }
})

export default Store;