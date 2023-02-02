import { LOADER_DISPLAY_ON, LOADER_DISPLAY_OFF, ERROR_DISPLAY_ON, ERROR_DISPLAY_OFF } from "./types";

const initialState = {
    loader: false,
    error: null
}

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case LOADER_DISPLAY_ON:
            return {
                ...state,
                loader: true
            }
        
        case LOADER_DISPLAY_OFF:
            return {
                ...state,
                loader: false
            }

        case ERROR_DISPLAY_ON:
            return {
                ...state,
                error: action.text
            }

        case ERROR_DISPLAY_OFF:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}