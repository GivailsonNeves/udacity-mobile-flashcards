export const CREATE_DECK = 'CREATE_DECK';

export const createDeck = (deckName) => ({
    type: CREATE_DECK,
    deckName
});