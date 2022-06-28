import { createSlice } from '@reduxjs/toolkit'

const mode1 = {
    darkMode: true,
    color1: '#293132',
    color2: '#474044',
    color3: '#4F5165',
    color4: '#547AA5',
    color5: '#50D8D7',
}

const mode2 = {
    darkMode: false,
    color1: '#E500AB',
    color2: '#FF0374',
    color3: '#FF794B',
    color4: '#FFBF42',
    color5: '#EF7A85',
}

const mode3 = {
    darkMode: false,
    color1: '#E500AB',
    color2: '#FF0374',
    color3: '#FF794B',
    color4: '#FFBF42',
    color5: '#EF7A85',
}

const initialState = mode2

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        darkMode: () => {
            return mode1
        },
        lightMode: () => {
            return mode2
        }
    }
})

export const { lightMode, darkMode } = modeSlice.actions

export default modeSlice.reducer