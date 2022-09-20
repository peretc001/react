import { configureStore } from '@reduxjs/toolkit'

import {modeReducer} from "./reducers/modeSlice";
import {locationReducer} from "@/store/reducers/locationSlice";

export const store = configureStore({
  reducer: {
    modeReducer,
    locationReducer
  }
})
