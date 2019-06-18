import { addDeck } from "../utils/store";
import { getTime } from "../utils/helpers";

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const CREATE_DECK = 'CREATE_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';

export const receiveDecks = (decks) => ({
    type: RECEIVE_DECKS,
    decks
});

export const createDeck = (deckName) => {
    const time = getTime();
    const deck = {
        id: `${time}`,
        name: deckName,
        createTime: time
    }

    return (dispatch) => {
        addDeck(deck)
            .then(
                _ => dispatch(_createDeck(deck))
            )

    }
};

const _createDeck = (deck) => ({
    type: CREATE_DECK,
    deck
});

export const removeDeck = (deck) => ({
    type: REMOVE_DECK,
    deck
});