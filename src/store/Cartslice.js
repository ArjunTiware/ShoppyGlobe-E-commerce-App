import { createSlice } from "@reduxjs/toolkit";
import { ItemandPrice } from "../Components/Cart/ItemandPrice";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        item:[]
    },
    reducers: {
        addtocart: (state, action) => {
            
              let product = action.payload
   
            let Existing_product = state.item.find((e)=>e.id==product.id)

            if(Existing_product){
                Existing_product.quantity += 1

            }else{
                product={...product,quantity:1}
                state.item.push(product)
            }
            
        },
        removefromcart: (state, action) => {
            const productId = action.payload;
      state.item = state.item.filter((e) => e.id !== productId);
        },
        decreaseQuantity: (state, action) => {
            const productId = action.payload;
      
            const product = state.item.find((e) => e.id === productId);
      
            if (product && product.quantity > 1) {
              product.quantity -= 1;
            } else if (product && product.quantity === 1) {
              state.item = state.item.filter((e) => e.id !== productId);
            }

    },
    clearcart:function(state,action){
      state.item.length=0;
    }

   
}

});

export const { addtocart, clearcart,removefromcart,decreaseQuantity } = CartSlice.actions;


export default CartSlice.reducer;