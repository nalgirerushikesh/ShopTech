import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = { ...action.payload, id: uuidv4() }; // Generating a unique ID for the new item
            state.push(newItem);
        },
        deleteFromCart(state, action) {
            return state.filter((item) => item.id != action.payload.id);
        },
    },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
