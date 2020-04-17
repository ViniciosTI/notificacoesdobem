import React, { Component } from 'react';
import { View, Text, Clipboard, Alert } from 'react-native';
import { Icon } from 'native-base';
import { showMessage } from "react-native-flash-message";
import { withUserContext } from '../../../components/UserContext'
import RNFetchBlob from 'rn-fetch-blob'
import Share from 'react-native-share';
import messaging from '@react-native-firebase/messaging';


class HomeButtonsAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '\"' + props.phrase + '\" - @' + props.author
    };
  }

  writeToClipboard = async () => {
    await Clipboard.setString(this.state.message);
    showMessage({
      message: "Mensagem copiada!",
      type: "danger",
    });
  };
  onShare = async () => {
    Alert.alert(
      'O que deseja fazer?',
      '',
      [
        {
          text: 'Compartilhar como texto', onPress: async () => {
            
            try {
              await Share.open({
                message:
                  this.state.message,
              });
            } catch (error) {
              // alert(error.message);
            }
          }
        },
        {
          text: 'Compartilhar como imagem', onPress: async () => {
            const fs = RNFetchBlob.fs;
            fs.readFile(this.props.userContext.user.imagePath, 'base64')
              .then(async data => {
                  
                  const shareOptions = {
                    
                    url: 'data:image/png;base64,'+data,
                  };
                  try {
                    await Share.open(shareOptions);
                    await RNFS.unlink(this.props.userContext.user.imagePath);
                  } catch (error) {
                    // alert(error.message);
                  }
              })
          }
        },
        { text: 'Cancelar', onPress: () => console.log('Cancel') },
      ],
      { cancelable: false }
    )
  };
  render() { 
    return (
      <>
      <View>
        <View style={{ height: 50, flexDirection: 'row', paddingHorizontal: 15 }}>
          <View>
            <Icon onPress={() => this.writeToClipboard()} name="copy" style={{ color: '#EA807C', marginLeft: 15, marginRight: 5 }} />
          </View>
          <View style={{ flexGrow: 1 }}><Text>
          </Text></View>
          <View>
            <Icon onPress={this.onShare} name="share" style={{ color: '#EA807C', marginRight: 15, marginLeft: 5 }} />
          </View>
        </View>
      </View>
      </>
    );
  }
}

export default withUserContext(HomeButtonsAction)

