// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerScreens from './components/DrawerScreens'
import UserContext from './components/UserContext'
// import AuthLoading from './screens/components/AuthLoading'


export default class App extends React.Component {
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