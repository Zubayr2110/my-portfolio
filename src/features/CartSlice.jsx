import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducer: {
        clearCart: (state) => {
            state.cart = []
        }
    }
})

export const { clearCart } = cartSlice

export default cartSlice.reducer;
