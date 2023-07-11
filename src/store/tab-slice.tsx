import {createSlice} from "@reduxjs/toolkit";
import {initialStateTypes} from "../models/MyTypes";


const initialState: initialStateTypes = {
    tab: 'Cooperation',
}

const tabSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        changeTab(state, action){
            state.tab = action.payload;
        }
    }
})

export const tabAction = tabSlice.actions;
export default tabSlice;