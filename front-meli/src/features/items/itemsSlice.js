import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../static/axios'

export const fecthAsyncItems = createAsyncThunk(
    'items/fecthAsyncItems', 
    async (term) =>{
        const response  = await axios.get(
            `/api/items?q=${term}`
            );
     return  response.data
});

export const fecthAsyncItemsDetail = createAsyncThunk(
    'items/fecthAsyncItemsDetail', 
    async (id) =>{
        const response  = await axios.get(
            `/api/items/${id}`
            );
     return  response.data
})


const initialState = {
    items: [],
    selectedItem: {},
    isLoading: false
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
            return {...state, items: payload }
        },
        [fecthAsyncItems.rejected]: () => {
            console.log("Rejected");
        },
        [fecthAsyncItemsDetail.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully");
            return{...state, selectedItem: payload }
        },
    }
})

export const { addItems } = itemsSlice.actions;
export const getAllItems = (state) => state.items;
export const getSelectedItem = (state) => state.items.selectedItem;
export const isLoading = (state) =>  state.items.isLoading;
export default itemsSlice.reducer;