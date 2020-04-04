import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';

export default class NoNetwork extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.back = this.back.bind(this)
  }

  back(){
      this.props.navigation.goBack();
  }

  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
            <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                <Text style={{ marginTop: 15, fontSize:25, fontFamily: 'Lato-Bold', color: '#EA807C', textAlign: 'center' }}>
                    Oops! =(
                </Text>
                <Text style={{ marginTop: 15, fontSize: 15, fontFamily: 'Lato-Bold', color: '#EA807C', textAlign: 'center' }}>
                    Não consegui me comunicar com o servidor
                </Text>
                <Text style={{ marginTop: 15, fontSize: 13, fontFamily: 'Lato-Bold', color: '#EA807C', textAlign: 'center' }}>
                    Verifique sua conexão com a internet ou tente mais tarde
                </Text>
                <Button onPress={this.back} style={{ margin: 15, backgroundColor:'#EA807C'}} info block>
                    <Text style={{ fontFamily: 'Lato-Bold', color: 'white' }}>
                        Tentar novamente
                    </Text>
                </Button>
            </View>
            

        </View>
    );
  }
}
