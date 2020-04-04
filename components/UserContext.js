import React, { Component } from 'react';
import {
  AsyncStorage
} from 'react-native';import firebase from 'react-native-firebase';

const UserContext = React.createContext();

const AdRequest = firebase.admob.AdRequest;

class UserProvider extends Component {

  constructor(props) {
    super(props);
  } 

  componentWillMount = async () => {
    await this.refreshSateWithDataBase()
  };

  refreshSateWithDataBase = async () => {
    await this.setState(JSON.parse(await AsyncStorage.getItem('user')))
  }

  setUser = async (user) => {
    await this.setState(user)
    await AsyncStorage.setItem('user', JSON.stringify(this.state));
  }

  setPushToken = async (token) => {
    await this.setState({
      pushToken: token
    })
    await AsyncStorage.setItem('user', JSON.stringify(this.state));
  }

  setUuid = async (uuid) => {
    await this.setState({
      uuid: uuid
    })
    await AsyncStorage.setItem('user', JSON.stringify(this.state));
  }

  setMessage = async (message) => {
    await this.setState({
      message: message
    })
    await AsyncStorage.setItem('user', JSON.stringify(this.state));
  }


  render() {
    return (
      <UserContext.Provider value={{
        user: this.state,
        adMobRequest: new AdRequest(),
        setPushToken: this.setPushToken,
        setUuid: this.setUuid,
        refreshSateWithDataBase: this.refreshSateWithDataBase,
        setUser: this.setUser,
        setMessage: this.setMessage
      }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;

// create the consumer as higher order component
export const withUserContext = ChildComponent => props => (
  <UserContext.Consumer>
    {
      context => <ChildComponent {...props} userContext={context} />
    }
  </UserContext.Consumer>
);
