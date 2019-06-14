import { listDecks } from "../utils/store";
import { receiveDecks } from "./decks";

export const LOADING_COMPLETE = "LOADING_COMPLETE";

export const handleInitialData = dispatch => {
    listDecks().then(
        decks => {
            dispatch(receiveDecks(decks));
            dispatch(setLoadComplete(true));
        }
    )
}

export const setLoadComplete = (status) => {
    return {
        type: LOADING_COMPLETE,
        loaded: status,
    }
}