import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

export default class HomeButtonsAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ height: 50, flexDirection: 'row', paddingHorizontal: 15 }}>
        <View>
          <Icon onPress={() => this.props.navigation.openDrawer()} type="FontAwesome5" name="copy" style={{ color: '#EA807C', marginLeft: 15, marginRight: 5 }} />
        </View>
        <View style={{ flexGrow: 1 }}><Text>         
        </Text></View>
        <View>
          <Icon onPress={() => this.props.navigation.openDrawer()} type="MaterialIcons" name="share" style={{ color: '#EA807C', marginRight: 15, marginLeft: 5 }} />
        </View>
      </View>
    );
  }
}
