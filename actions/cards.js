import { addCard } from "../utils/store";
import { getTime } from "../utils/helpers";

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const CREATE_CARD = 'CREATE_CARD';

export const RECEIVE_CARDS = (cards) => ({
    type: RECEIVE_CARDS,
    cards
});

export const createCard = ({ question, answer, idDeck}) => {    
    const card = {
        idDeck,
        question,
        answer,
        createTime: getTime()
    };
    addCard(card);
    return _createCard(card);
}

export const _createCard = (card) => ({
    type: CREATE_CARD,
    card
});