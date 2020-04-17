// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerScreens from './components/DrawerScreens'
import UserContext from './components/UserContext'
import { AppState, Platform, PushNotificationIOS } from "react-native";
import UserResource from './resources/UserResource'

export default class App extends React.Component {
  state = {
    appState: AppState.currentState
  };

  componentDidMount() {
    AppState.addEventListener("change", this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
  }

  _handleAppStateChange = nextAppState => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      Platform.OS === 'ios' && PushNotificationIOS.setApplicationIconBadgeNumber(0)
    }
    this.setState({ appState: nextAppState });
  };

  render() {
    return (
      <UserContext>
        <NavigationContainer independent={true} theme={MyTheme}>
          <DrawerScreens />
        </NavigationContainer>
      </UserContext>
    );
  }
}

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: '#fff',
    text: '#EA807C',
    border: 'rgb(199, 199, 204)',
  },
};