import { createSlice } from "@reduxjs/toolkit";

const SettingSilce = createSlice({
    name: 'setting',
    initialState: JSON.parse(localStorage.getItem('setting')) || {
        generalSetting: {
            bg: '#000000',
            isFloating: false,
            isGuideOn: false,
        },

    },
    reducers: {


        updateSetting: {
            reducer(state, action) {
                return action.payload;
            },
            prepare(bg, isFloating, isGuideOn) {
                return {
                    payload: {
                        generalSetting: {
                            bg,
                            isFloating,
                            isGuideOn,
                        },
                    }
                }

            }
        },

        resetSetting: () => {
            return {
                generalSetting: {
                    bg: '#000000',
                    isFloating: false,
                    isGuideOn: false,
                },

            }
        }
    }
});

export default SettingSilce.reducer;
export const { updateSetting, resetSetting } = SettingSilce.actions;