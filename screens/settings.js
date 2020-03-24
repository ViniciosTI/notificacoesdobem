import React, { Component } from 'react';
import { ScrollView, Image, TouchableOpacity } from 'react-native';
import ContainerBase from '../components/ContainerBase'
import { Text, View, Card } from 'native-base';
import * as Animatable from 'react-native-animatable';

AnimatedCard = Animatable.createAnimatableComponent(Card);

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <ContainerBase navigation={this.props.navigation}>
        <ScrollView style={{ marginHorizontal: 10, marginTop: 20 }}>
          <Text style={{ fontSize: 20, fontFamily: 'Lato-Regular', color: '#404040' }}>Escolha um período</Text>
          <Text style={{ marginTop: 10, fontSize: 14, fontFamily: 'Lato-regular', color: '#888888' }}>Personalize suas notificações para que o Notificações do Bem pode lhe enviar a mensagem certa para cada momento =)</Text>
          <View style={{ marginTop: 10, flexGrow: 1 }}>
            {this.card('Morning', 'Bom dia ☕️', 'Receba uma notificação no período pela manhã. Como deseja começar o seu dia?')}
            {this.card('Afternoon', 'Boa tarde 🌞', 'Uma notificação recebida a tarde pode salvar o seu dia.')}
            {this.card('Night', 'Boa Noite 🌜', 'Finalizando o seu dia com uma notificação apropriada')}
          </View>
        </ScrollView>
      </ContainerBase>
    );
  }

  card(img, title, body) {
    var imgRendered = null;
    if (img == 'Morning') {
      imgRendered = require('../images/morning.jpg')
    }
    if (img == 'Afternoon') {
      imgRendered = require('../images/afternoon.jpg')
    }
    if (img == 'Night') {
      imgRendered = require('../images/night.jpg')
    }
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate(img)}>
        <AnimatedCard animation="fadeIn" style={{ height: 250, paddingBottom: 20, }}>
          <Image
            style={{ width: null, height: 200, flex: 1 }}
            source={imgRendered}
          />
          <View style={{ padding: 10 }}>
            <Text style={{ marginTop: 10, fontSize: 16, fontFamily: 'Lato-Regular', color: '#404040' }}>{title}</Text>
            <Text style={{ marginTop: 5, fontSize: 14, fontFamily: 'Lato-Regular', color: '#888888' }}>{body}</Text>
          </View>
        </AnimatedCard>
      </TouchableOpacity>
    )
  }
}
export default Setting;