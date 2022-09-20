import { UI_SIZE_S, UI_SIZE_XS, UI_SIZE_M } from '@/constants/index';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isMobile: false,
    isTablet: false
}

const isMobileMode = (mode) => [UI_SIZE_S, UI_SIZE_XS].includes(mode);
const isTabletMode = (mode) => [UI_SIZE_M].includes(mode);

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        setMode: (state, action) => {
            state.isMobile = isMobileMode(action.payload)
            state.isTablet = isTabletMode(action.payload)
        },
    }
})

export const { setMode } = modeSlice.actions;
export const modeReducer = modeSlice.reducer;
