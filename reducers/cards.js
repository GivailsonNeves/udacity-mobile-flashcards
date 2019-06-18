import { CREATE_CARD, RECEIVE_CARDS } from "../actions/cards";

const cards = (state = {}, action) => {
    switch(action.type)  {
        case RECEIVE_CARDS:
            return {
                ...action.cards
            }
        case CREATE_CARD:
            const idDeck = action.card.idDeck;
            const _cards = state[idDeck] && state[idDeck].cards ? 
                state[idDeck].cards :
                [];
            _cards.push(action.card);
            const newState = {
                ...state,
                [idDeck]: {
                    'cards': _cards
                }
            };
            return newState
        default:
            return state;
    }
}

export default cards;