import { createStore } from 'redux';
import reducers from '../reducers';
import { AsyncStorage } from 'react-native';

const configureStore = () => {

    const store = createStore(reducers);

    AsyncStorage.getItem('decks', decks => {
        if (!decks) {
            AsyncStorage.setItem('decks', '{}')
        } else {
            //store.setItem('decks', JSON.parse(decks));
        }
    });

    AsyncStorage.getItem('questions', questions => {
        if (!questions) {
            AsyncStorage.setItem('questions', '{}')
        } else {
            //store.setItem('questions', JSON.parse(questions));
        }
    });

    return store;
}

export default configureStore;

export const addDeck = (deck) => {
    AsyncStorage.getItem('decks', decks => {
        let currentDecks = JSON.parse(decks);
        let newDecks = currentDecks[decks.id] = decks;
        AsyncStorage.setItem('decks', JSON.stringify(newDecks));
    })
}

export const addQuestion = (question) => {
    AsyncStorage.getItem('questions', questions => {
        let currentQuestions = JSON.parse(questions);
        let newQuestions = currentQuestions[question.id] = question;
        AsyncStorage.setItem('questions', JSON.stringify(newQuestions));
    })
}