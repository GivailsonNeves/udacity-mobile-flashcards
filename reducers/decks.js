import { CREATE_DECK } from "../actions/decks";
import { getTime } from "../utils/helpers";

const decks = (state = {}, action) => {
    switch(action.type) {
        case CREATE_DECK: 
            const time = getTime();

            return {
                ...state,
                [time]: {
                    id: time,
                    name: action.deckName,
                    createTime: time,
                    questions: []
                }
            }
        default:
            return state;
    }
}

export default decks;