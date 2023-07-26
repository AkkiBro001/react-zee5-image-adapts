import { configureStore } from "@reduxjs/toolkit";
import SettingReducer from "./SettingSlice/SettingSlice";
import NotificationReducer from "./SettingSlice/NotificationSlice";
import NotiImageReducer from "./SettingSlice/NotiImageSlice";

const Store = configureStore({
    reducer:{
        setting: SettingReducer,
        notification: NotificationReducer,
        notiImage: NotiImageReducer,
    }
})

export default Store;