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
    console.log(deck)
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

export const addQuestion = (question) => {
    AsyncStorage.getItem('questions')
        .then(questions => {
            let currentQuestions = JSON.parse(questions);
            let newQuestions = currentQuestions[question.id] = question;
            AsyncStorage.setItem('questions', JSON.stringify(newQuestions));
        })
}