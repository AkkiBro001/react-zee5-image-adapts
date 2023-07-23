import { createSlice } from "@reduxjs/toolkit";

export const DEFAULT_NOTI_SIZES = [
    {w: 1024, h: 512, res: 72, name: "Normal (1024x512)"},
    {w: 640, h: 320, res: 72, name: "3in1 (640x320)"},
    {w: 800, h: 600, res: 72, name: "ZB (800x600)"},
    {w: 72, h: 72, res: 72, name: "Mug (72x72)"},
    {w: null, h: null, res: null, name: "Custom"},
]

const NotificationSlice = createSlice({
    name: 'notification',
    initialState: {
        defaultNotiSize: {w: 1024, h: 512, res: 72, name: "Normal (1024x512)"},
        notiSize: JSON.parse(localStorage.getItem('notiCustomSizes')) ? [
            {w: 1024, h: 512, res: 72, name: "Normal (1024x512)"},
            {w: 640, h: 320, res: 72, name: "3in1 (640x320)"},
            {w: 800, h: 600, res: 72, name: "ZB (800x600)"},
            {w: 72, h: 72, res: 72, name: "Mug (72x72)"},
            {w: null, h: null, res: null, name: "Custom"},
            ...JSON.parse(localStorage.getItem('notiCustomSizes'))
        ] 
        : 
        DEFAULT_NOTI_SIZES
        ,
        customNotiSize: JSON.parse(localStorage.getItem('notiCustomSizes')) || [],
        customNotiCTA: JSON.parse(localStorage.getItem('notiCustomCTAs')) || [],
        
    },

    reducers: {
        

        customNotiSizeUpdate: (state, action) => {
            
                return {...state, notiSize: [...state.notiSize, action.payload], customNotiSize: [...state.customNotiSize, action.payload]}
            
        },

        deleteCustomNotiSize: (state, action) => {
                const filterCustomSize = state.customNotiSize.filter(size => size.name !== action.payload);
                return {...state, 
                    notiSize: filterCustomSize.length ? [...DEFAULT_NOTI_SIZES, ...filterCustomSize] : DEFAULT_NOTI_SIZES,
                    customNotiSize: filterCustomSize
                }
        },

        editCustomNotiSize: (state, action) => {
            
            return {...state, 
                notiSize: state.notiSize.map(size => size.name === action.payload.targetName ? action.payload.newValue : size),
                customNotiSize: state.customNotiSize.map(size => size.name === action.payload.targetName ? action.payload.newValue : size)
            }
        },

        setDefaultNotiSize: (state, action) => {
            return {...state,
                    defaultNotiSize: state.notiSize.find(size => size.name === action.payload)
            }
        }
    }
})

export default NotificationSlice.reducer;
export const {customNotiSizeUpdate, deleteCustomNotiSize, editCustomNotiSize, setDefaultNotiSize} = NotificationSlice.actions;
