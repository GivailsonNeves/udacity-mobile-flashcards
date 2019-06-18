import { addCard } from "../utils/store";
import { getTime } from "../utils/helpers";

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const CREATE_CARD = 'CREATE_CARD';

export const receiveCards = (cards) => ({
    type: RECEIVE_CARDS,
    cards
});

export const createCard = ({ question, answer, idDeck}) => {    
    const card = {
        idDeck : `${idDeck}`,
        question,
        answer,
        createTime: getTime()
    };
    return (dispatch) => {
        addCard(card)
            .then(
                _ => dispatch(_createCard(card))
            )
    }
}

export const _createCard = (card) => ({
    type: CREATE_CARD,
    card
});
