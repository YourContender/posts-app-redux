import { INC, DEC, INPUT_TEXT, COMMENT_CREATE, COMMENT_UPDATE } from "./types";

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