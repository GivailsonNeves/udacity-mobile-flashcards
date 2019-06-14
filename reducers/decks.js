import { CREATE_DECK, RECEIVE_DECKS } from "../actions/decks";

const decks = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...action.decks
            }
        case CREATE_DECK:
            return {
                ...state,
                [action.deck.id]: action.deck
            }
        default:
            return state;
    }
}

export default decks;