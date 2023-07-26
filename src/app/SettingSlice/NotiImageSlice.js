import { createAsyncThunk, createSlice  } from "@reduxjs/toolkit";


export const getImageThunks = createAsyncThunk('fetch/loadImage', async function previewImage({files, fetchURL}){
   
    if(files.length === 4){
        const p1 = await fetchURL(files[0]);
        const p2 = await fetchURL(files[1]);
        const p3 = await fetchURL(files[2]);
        const p4 = await fetchURL(files[3]);

        return Promise.all([p1,p2,p3,p4]).then(res => res)
    }else if(files.length === 3){
        const p1 = await fetchURL(files[0]);
        const p2 = await fetchURL(files[1]);
        const p3 = await fetchURL(files[2]);
        

        return Promise.all([p1,p2,p3]).then(res => res)
    }else if(files.length === 2){
        const p1 = await fetchURL(files[0]);
        const p2 = await fetchURL(files[1]);
        
        

        return Promise.all([p1,p2]).then(res => res)
    }else{
        const p1 = await fetchURL(files[0]);
        return Promise.all([p1]).then(res => res)
    }

    
})

  



const initialState = {
    data: {
        noOfImage: 0,
        typeOfNoti: '',
        notiSize: {w:0, h:0, res: 0, name: ''},
        images: [],
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
    },
    status: 'loading',
    error: null
}


const NotiImageSlice = createSlice({
    name: "notiImage",
    initialState,

    reducers: {
        loadImage: {
            reducer(state, action){
                state.data = {...state.data, ...action.payload}
            },

            prepare(noOfImage, typeOfNoti, notiSize, images){
                return {
                    payload: {
                        noOfImage,
                        typeOfNoti,
                        notiSize,
                        images
                    }
                }
            }
        },

        updateNotiSize: (state, action) => {
            state.data = {...state.data, typeOfNoti: action.payload.name, notiSize: action.payload}
        }
        
    },

    

    extraReducers(builder){
        builder
        .addCase(getImageThunks.pending, (state, action) => {
            state.status = "loading"
        })
        .addCase(getImageThunks.fulfilled, (state, action) => {
           
            state.status = "ideal";
            state.data = {...state.data,
                        images: state.data.images.map((img, index) => ({...img, ...action.payload[index]}))
                        };
        }).addCase(getImageThunks.rejected, (state, action) => {
            
            state.status = "error";
            state.error = action.error;
            
        })
    }
})

export default NotiImageSlice.reducer;
export const {loadImage, updateNotiSize} = NotiImageSlice.actions
