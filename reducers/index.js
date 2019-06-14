import { combineReducers } from 'redux';
import decks from './decks';
import cards from './cards';
import loading from './loading';

export default combineReducers({
    decks,
    cards,
    loaded: loading
});