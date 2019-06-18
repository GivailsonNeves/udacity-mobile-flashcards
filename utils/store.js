import { AsyncStorage } from 'react-native';

export const listDecks = () => new Promise((resolve, reject) => {
    // AsyncStorage.clear();
    AsyncStorage.getItem('decks')
        .then(
            decks => {
                resolve(decks ? JSON.parse(decks) : {});
            },
            _ => reject()
        );
});

export const listCards = () => new Promise((resolve, reject) => {
    AsyncStorage.getItem('cards')
        .then(
            cards => {
                resolve(cards ? JSON.parse(cards) : {});
            },
            _ => reject()
        );
});

export const addDeck = (deck) => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('decks')
            .then(decks => {
                let currentDecks = JSON.parse(decks);
                let newDecks = {
                    ...currentDecks,
                    [deck.id]: deck
                };
                AsyncStorage.setItem('decks', JSON.stringify(newDecks))
                    .then(_ => resolve(), _ => reject());
            }, _ => reject());
    });
}

export const addCard = (card) => {

    return new Promise((resolve, reject) => {

        AsyncStorage.getItem('cards')
            .then(cards => {
                let currentCards = JSON.parse(cards);
                const _cards = currentCards && currentCards[card.idDeck] && currentCards[card.idDeck].cards ? currentCards[card.idDeck].cards : [];
                _cards.push(card);
                let newCards = {
                    ...currentCards,
                    [card.idDeck]: {
                        idDeck: card.idDeck,
                        cards: _cards
                    }
                };
                AsyncStorage.setItem('cards', JSON.stringify(newCards))
                    .then(() => resolve(), () => reject());
            }, () => reject());

    });
}