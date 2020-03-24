import React, { Component } from 'react';
import {Text } from 'react-native';
import {Icon} from 'native-base';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
        category: this.props.category,
        color: this.props.color || 'white'
    };
  }

  renderIcon(){

      if (this.state.category.selected){
          return <Icon style={{ color:  this.state.color}} type="MaterialIcons" name='check' />
      }

      return <Icon style={{ color: 'rgba(255, 255, 255, 0)' }} type="MaterialIcons" name='check' />
  }

  render() {
    return (
        <TouchableOpacity onPress={()=>{
            if (this.props.onSelected){
                this.props.onSelected(this.state.category)
            }
            
        }}>
            <Animatable.View animation="fadeInRight" style={{ height: 50, flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
                {this.renderIcon()}
                <Text style={{ marginLeft: 10, fontSize: 20, fontFamily: 'Lato-Regular', color: this.state.color }}>{this.state.category.name}</Text>
            </Animatable.View>
        </TouchableOpacity>
        
    );
  }
}
