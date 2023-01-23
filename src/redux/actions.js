import { INC, DEC } from "./types";

export function incrementLikes() {
    return { type: INC }
};

export function decrementLikes() {
    return { type: DEC }
};