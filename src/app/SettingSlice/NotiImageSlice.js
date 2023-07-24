import { createSlice } from "@reduxjs/toolkit";

const NotiImageSlice = createSlice({
    name: "notiImage",
    initialState: {
        noOfImage: 0,
        typeOfNoti: '',
        notiSize: {w:0, h:0, res: 0, name: ''},
        image: [{
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            quality: 0,
            CTA: {
                name: 'Watch Live',
                ctaPOS: '',
                channel: '',
                channelPOS: '',
                gradient:'',
                gradientOpacity: 0,
            },
            copy:{
                
            }
        }]
    }
})