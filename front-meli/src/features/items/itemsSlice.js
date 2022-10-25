import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../static/axios'

export const fecthAsyncItems = createAsyncThunk(
    'items/fecthAsyncItems', 
    async () =>{
        const itemText = 'ps4'
    const response  = await axios.get(`/api/items?q=${itemText}`)
        return  response.data
})


const initialState = {
    items: []
}

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItems: (state, {payload}) => {
            state.items = payload;
        },
    },
    extraReducers: {
        [fecthAsyncItems.pending]: () => {
            console.log("Pending");
        },
        [fecthAsyncItems.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully");
            return{...state, items: payload }
        },
        [fecthAsyncItems.rejected]: () => {
            console.log("Rejected");
        }
    }
})

export const { addItems } = itemsSlice.actions;
export const getAllItems = (state) => state.items;
export default itemsSlice.reducer;