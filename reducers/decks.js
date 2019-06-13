import { CREATE_DECK } from "../actions/decks";
import { getTime } from "../utils/helpers";
import { addDeck } from "../utils/store";

const decks = (state = {}, action) => {
    switch(action.type) {
        case CREATE_DECK: 
            const time = getTime();
            
            const deck = {
                id: time,
                name: action.deckName,
                createTime: time,
                questions: []
            };

            addDeck(deck)
            return {
                ...state,
                [time] : deck
            }
        default:
            return state;
    }
}

export default decks;