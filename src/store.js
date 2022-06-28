import { configureStore } from '@reduxjs/toolkit'
import modeSlice from './features/modes'

export const store = configureStore({
    reducer: {
        mode: modeSlice
    }
})