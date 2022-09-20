import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    location: {
        id: 1,
        name: 'Москва'
    }
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setCurrentLocation: (state, action) => {
            state.location = action.payload
        },
    }
})

export const { setCurrentLocation } = locationSlice.actions;
export const locationReducer = locationSlice.reducer;
