import { createSlice } from "@reduxjs/toolkit";

let cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        additems:(state,action)=>{
            state.items.push(action.payload)
        },
        removeitems:(state,action)=>{
            // state.items=state.items.filter((x,y)=>{ return  action.payload  x.card!=undefined?x.card.info.name:x.dish.info.name})
        }
    }
})
export let {additems}=cartSlice.actions;
export default cartSlice.reducer;

