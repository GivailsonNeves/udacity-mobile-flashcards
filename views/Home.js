import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Decks from '../components/Decks';
import DeckForm from '../components/DeckForm';

const Home = createBottomTabNavigator({
    Decks: {
        screen: Decks,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({ tintColor }) => <Ionicons name='ios-list-box' size={25} color={tintColor} />
        },
    },
    DeckForm: {
        screen: DeckForm,
        navigationOptions: {
            tabBarLabel: 'Deck',
            tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add-circle' size={25} color={tintColor} />
        }
    }
});

export default createAppContainer(Home);