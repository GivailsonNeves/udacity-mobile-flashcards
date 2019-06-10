import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { View, StatusBar } from 'react-native';
import { createStore } from 'redux';
import Constants from 'expo-constants';
import reducers from './reducers';
import Provider from 'react-redux';
import { purple } from './utils/colors';
import Home from './views/Home';
import Deck from './views/Deck';
import style from 'styled-components';

const MainView = style.View`
  flex: 1;
`

const store = createStore(reducers);

const AppStatusBar = ({backgroundColor, ...props}) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Stack = createStackNavigator({
  Home: {
    screen: Home,
  },
  Deck: {
    screen: Deck,
  }
});

const AppContainer = createAppContainer(Stack);

const App = () => (
    <MainView>
      <AppStatusBar backgroundColor={purple} barStyle="light-content" />
      <AppContainer />
    </MainView>
);

export default App;