import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialPortalTypes} from "../utils/MyTypes";
import {staticData} from "../utils/static-data";


const initialState: initialPortalTypes = {
    active: false,
    item: staticData[0],
}

const portalSlice = createSlice({
    name: 'portal',
    initialState,
    reducers: {
        setPortal(state, action: PayloadAction<initialPortalTypes>){
            state.active = action.payload.active;
            state.item = action.payload.item;
        }
    }
})

export const { setPortal } = portalSlice.actions
export default portalSlice.reducer