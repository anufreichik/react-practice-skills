import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";


// Define a type for the slice state
interface CounterState {
    count: number
  }
const initialState:CounterState  = {
    count:0
}

export const counterSlice = createSlice({
name:'counter',
initialState,
reducers:{
    increment:(state)=>{
        state.count+=1;
    },
    decrement:(state)=>{
        state.count-=1;
    },
    reset:(state)=>{
        state.count=0;
    },
    incrementByAmount:(state, action:PayloadAction<number>)=>{
        state.count+=action.payload;
    }
}
})

export const {increment, decrement, incrementByAmount, reset} = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.count;
export default counterSlice.reducer;
