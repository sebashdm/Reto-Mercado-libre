import { createSlice } from '@reduxjs/toolkit'


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
})

export const { addItems } = itemsSlice.actions;
export const getAllItems = (state) => state.items.items;
export default itemsSlice.reducer;