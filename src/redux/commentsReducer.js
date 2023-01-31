import { COMMENT_CREATE, COMMENT_DELETE, COMMENT_UPDATE } from "./types";

const initialState = {
    comments: []
}

export function commentsReducer(state = initialState, action) {
    console.log('comment Reducer: ', action);

    switch (action.type) {
        case COMMENT_CREATE :
            return {
                ...state,
                comments: [...state.comments, action.data]
            }
        case COMMENT_UPDATE :
            const { data } = action;
            const { comments } = state;
            console.log('comments:', action);
            const itemIndex = comments.findIndex(item => item.id === data.id);

            const newComments = [
                ...comments.slice(0, itemIndex),
                data,
                ...comments.slice(itemIndex + 1)
            ];

            return {
                ...state,
                comments: newComments
            }
        case COMMENT_DELETE :
            return(() => {
                const { id } = action;
                const { comments } = state;
                console.log('comments:', action);
                const correctList = comments.filter(item => item.id !== id);
    
                return {
                    ...state,
                    comments: correctList
                }
            })()

            
        default:
            return state
    }
}   