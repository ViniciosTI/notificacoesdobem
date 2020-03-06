import React from 'react'
import { Button, View } from 'react-native';
import ContainerBase from '../components/ContainerBase'

class Settings extends React.Component {
  render() {
    return (
      <ContainerBase navigation={this.props.navigation}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button onPress={() => this.props.navigation.goBack()} title="Go back home" />
        </View>
      </ContainerBase>
    );
  }
}
export default Settings
