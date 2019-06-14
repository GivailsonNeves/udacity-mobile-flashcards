import { combineReducers } from 'redux';
import decks from './decks';
import questions from './questions';
import loading from './loading';

export default combineReducers({
    decks,
    questions,
    loaded: loading
});