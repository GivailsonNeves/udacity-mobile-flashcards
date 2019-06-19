import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { View, StatusBar, Text, ToolbarAndroid } from 'react-native';
import Constants from 'expo-constants';
import { Provider, connect } from 'react-redux'
import { purple } from './utils/colors';
import Home from './views/Home';
import Deck from './views/Deck';
import style from 'styled-components';
import reducers from './reducers';
import { createStore } from 'redux';
import { handleInitialData } from './actions/loading';
import CardForm from './views/CardForm';
import CardAnswer from './views/CardAnswer';
import middleware from './middleware';
import { setLocalNotification } from './utils/helpers';

const MainView = style.View`
  flex: 1;
`;

const store = createStore(reducers, middleware);

const AppStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      <ToolbarAndroid title="AwesomeApp" />
    </View>
  );
}

const Stack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Decks',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: 'white'
    }),
  },
  Deck: {
    screen: Deck,
  },
  CardForm: {
    screen: CardForm,
  },
  CardAnswer: {
    screen: CardAnswer
  }
}, {
  mode: 'modal',
  headerMode: 'float',
});

const AppContainer = createAppContainer(Stack);

class AppMainView extends Component {

  componentDidMount() {
    handleInitialData(this.props.dispatch);
  }

  render() {
    const { loaded } = this.props;
    return (
      <MainView>
        <AppStatusBar backgroundColor={purple} barStyle="light-content" />
        {
          loaded ?
            <AppContainer /> :
            <Text>Carregando...</Text>
        }
      </MainView>
    );
  }
}

const mapStateToProps = ({ loaded }) => (
  {
    loaded
  }
);


const AppConnected = connect(mapStateToProps)(AppMainView);

class App  extends Component {

  componentDidMount () {
    setLocalNotification();
  }

  render () {
    return (
      <Provider store={store}>
        <AppConnected />
      </Provider>
    );
  }
}

export default App;