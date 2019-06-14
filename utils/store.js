import { AsyncStorage } from 'react-native';

export const listDecks = () => new Promise((resolve) => {
    AsyncStorage.getItem('decks')
        .then(
            decks => {
                console.log(decks);
                resolve(decks ? JSON.parse(decks) : {});
            }
        );
});

export const addDeck = (deck) => {    
    AsyncStorage.getItem('decks')
        .then(decks => {
            let currentDecks = JSON.parse(decks);
            let newDecks = {
                ...currentDecks,
                [deck.id]: deck
            };
            AsyncStorage.setItem('decks', JSON.stringify(newDecks));
        });
}

export const addCard = (card) => {
    AsyncStorage.getItem('cards')
        .then(cards => {
            let currentCards = JSON.parse(cards);
            let newCards = {
                ...currentCards,
                [card.idDeck]: card
            };
            AsyncStorage.setItem('cards', JSON.stringify(newCards));
        })
}