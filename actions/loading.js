import { listDecks, listCards } from "../utils/store";
import { receiveDecks } from "./decks";
import { receiveCards } from "./cards";

export const LOADING_COMPLETE = "LOADING_COMPLETE";

export const handleInitialData = dispatch => {
    listDecks().then(
        decks => {
            dispatch(receiveDecks(decks));
            dispatch(setLoadComplete(true));
        }
    );
    listCards().then(
        cards => {
            dispatch(receiveCards(cards));
        }
    )
}

export const setLoadComplete = (status) => {
    return {
        type: LOADING_COMPLETE,
        loaded: status,
    }
}