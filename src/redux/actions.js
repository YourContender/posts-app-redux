import { 
    INC, 
    DEC, 
    INPUT_TEXT, 
    COMMENT_CREATE, 
    COMMENT_UPDATE, 
    COMMENT_DELETE, 
    COMMENTS_LOAD,
    LOADER_DISPLAY_ON,
    LOADER_DISPLAY_OFF,
    ERROR_DISPLAY_ON,
    ERROR_DISPLAY_OFF
} from "./types";

export function incrementLikes() {
    return { type: INC }
};

export function decrementLikes() {
    return { type: DEC }
};

export function inputText(text) {
    return { type: INPUT_TEXT, text }
}

export function commentCreate(text, id) {
    return {
        type: COMMENT_CREATE,
        data: { text, id }
    }
}

export function commentUpdate(text, id) {
    return {
        type: COMMENT_UPDATE,
        data: { text, id }
    }
}

export function commentDelete(id) {
    return {
        type: COMMENT_DELETE,
        id
    }
}

export function loaderOn(id) {
    return {
        type: LOADER_DISPLAY_ON,
        id
    }
}

export function LoaderOff(id) {
    return {
        type: LOADER_DISPLAY_OFF,
        id
    }
}

export function errorOn(text) {
    console.log('error on: ', text);
    return {
        type: ERROR_DISPLAY_ON,
        text
    }
}

export function errorOff() {
    return {
        type: ERROR_DISPLAY_OFF
    }
}

export function commentsLoad() {
    return async dispatch => {
        try {
            dispatch(loaderOn());

            const res = await fetch('https://sonplaceholder.typicode.com/comments?_limit=10');
            const data = await res.json();
            
            setTimeout(() => {
                dispatch({
                    type: COMMENTS_LOAD,
                    data
                })
        
                dispatch(LoaderOff());
            }, 1000)
        } catch(err) {
            dispatch(errorOn('error API'))
        }
    }
}