import React, { Component } from 'react';
import { ActivityIndicator, View, Platform, Alert } from 'react-native';
import NotificationSetting from 'react-native-open-notification';
import Permissions from 'react-native-permissions'
import AndroidOpenSettings from 'react-native-android-open-settings'

import { withUserContext } from '../components/UserContext'
import firebase from 'react-native-firebase';
import { Text } from 'native-base';

import UserResource from '../resources/UserResource';


class AuthLoading extends Component {
  constructor(props) {
    super(props);

    this.resource = new UserResource()
  }

  static navigationOptions = ({ navigation }) => ({
    header: (
      <View></View>
    ),
    drawerLockMode: 'locked-closed'
  })

  componentDidMount = async () => {
    this.props.navigation.addListener('focus', () => {
      this._bootstrapAsync()
    });
  };

  _newUser = async () => {
    console.log('Novo Usuario!')
    let user = await this.resource.newUser();
    if (user.uuid == undefined) {
      throw 'Server response when crate user'
    }
    await this.props.userContext.setUser(user)
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    await this.props.userContext.refreshSateWithDataBase()

    if (this.props.userContext.user == null) {
      try {
        await this._newUser()
      } catch (e) {
        return;
      }

    }
    try {
      await this.resource.postTouch(this.props.userContext.user.uuid)
    } catch (e) {
      this.props.navigation.navigate('Nonet');
      return;
    }

    await this._pushNotification()

    await this.resource.postPushToken(this.props.userContext.user.uuid, this.props.userContext.user.pushToken)

    await this._getMessage()

    this.props.navigation.navigate('Home');
  };

  _getMessage = async () => {

    let response = await this.resource.getNotification(this.props.userContext.user.uuid)
    await this.props.userContext.setMessage(response)


  }


  _insistPermissioniOS = async () => {
    Alert.alert(
      '😢 Dê uma chance!',
      'Nosso app foi pensado para que você recebas notificações. Habilite para ter uma melhor experiência com as Notificações do bem',
      [
        { text: 'Mais tarde 😔', onPress: () => console.log('OK Pressed') },
        { text: 'Ok, farei isso! 😃', onPress: () => NotificationSetting.open() },
      ],
      { cancelable: false }
    )
  }

  _requestPermission = async () => {
    Alert.alert(
      '❤ Não perca nossas notificações!',
      'Habilite as notificações e tenha um dia melhor com nossas mensagens',
      [
        { text: '👎 Mais tarde', onPress: () => console.log('OK Pressed') },
        {
          text: '🤙 Com certeza!', onPress: async () => {
            try {
              await firebase.messaging().requestPermission()
              if (Platform.OS !== 'ios') {
                AndroidOpenSettings.appNotificationSettings()
              }
              await this._getPushToken()
            } catch (e) {
              console.log('TRY', e.message)//Failed to grant permission
              if (Platform.OS === 'ios') {
                givePermisssion = await this._insistPermissioniOS()
                return;
              }
            }

          }
        },
      ],
      { cancelable: false }
    )

  }

  _getPushToken = async () => {
    try {
      let token = await firebase.messaging().getToken()
      if (token !== this.props.userContext.pushToken) {
        this.props.userContext.setPushToken(token)
      }
    } catch (e) {
    }
  }

  _getPermissioniOS = async () => {
    let settingPermittions = await Permissions.checkNotifications()

    console.log('SettingPermission', settingPermittions)

    if (settingPermittions == 'undetermined') {
      await this._requestPermission()
    }
    if (settingPermittions == 'denied') {
      await this._insistPermissioniOS()
    }
  }

  _getPermissionAndroid = async () => {
    if (! await firebase.messaging().hasPermission()) {
      await this._requestPermission()
    }

  }

  _pushNotification = async () => {
    if (Platform.OS === 'ios') {
      await this._getPermissioniOS()
    } else {
      await this._getPermissionAndroid()
    }
    await this._getPushToken()
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>

        <View style={{ justifyContent: 'center', alignContent: 'center' }}>
          <ActivityIndicator color='#EA807C' size='large' />
          <Text style={{ marginTop: 10, fontFamily: 'Lato-Bold', color: '#EA807C', textAlign: 'center' }}>Sincronizando...</Text>
        </View>

      </View>
    );
  }
}

export default withUserContext(AuthLoading);
