import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constrant";


const chatSlice=createSlice({
      name:"chat",
      initialState:{
           message:[]
      },
      reducers:{
          addMessage(state, acttion){
              state.message.splice(OFFSET_LIVE_CHAT, 1);
            state.message.unshift(acttion.payload);
          }

      }
})

export const {addMessage}=chatSlice.actions;
export default chatSlice.reducer;