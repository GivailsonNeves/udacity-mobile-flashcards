import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { View, StatusBar, Text } from 'react-native';
import Constants from 'expo-constants';
import { Provider, connect } from 'react-redux'
import { purple } from './utils/colors';
import Home from './views/Home';
import Deck from './views/Deck';
import style from 'styled-components';
import reducers from './reducers';
import { createStore } from 'redux';
import { handleInitialData } from './actions/loading';

const MainView = style.View`
  flex: 1;
`;

const store = createStore(reducers);

const AppStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
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

const App = () => (
  <Provider store={store}>
    <AppConnected />
  </Provider>
);

export default App;