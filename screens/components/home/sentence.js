import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


class Sentence extends Component {
    state = {
        phrase: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        author: 'Lorem ipsum dolor sit'
    }

    getFontSize() {
        var size = this.state.phrase.length
        if (size >= 200) {
            return 25
        }
        if (size >= 100) {
            return 30
        }
        return 35
    }
    getAuthorFontSize() {
        var size = this.state.phrase.length
        if (size >= 200) {
            return 18
        }
        if (size >= 100) {
            return 20
        }
        return 25
    }

    render() {
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', height: 40, paddingHorizontal: 15 }}>
                        <View>
                            <Text style={{ fontSize: 60, fontFamily: 'Lato-Bold', color: '#EA807C' }} >"</Text>
                        </View>
                        <Text style={{ flexGrow: 1 }}></Text>
                        <View>
                            <Text style={{ fontSize: 60, fontFamily: 'Lato-Bold', color: '#EA807C' }}>"</Text>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 15, }}>
                        <Text style={{ textAlign: 'center', fontSize: this.getFontSize(), fontFamily: 'Lato-Light', color: '#404040' }}>{this.state.phrase}</Text>
                    </View>
                    <View style={{ padding: 15, }}>
                        <Text style={{ textAlign: 'center', fontSize: this.getAuthorFontSize(), fontFamily: 'Lato-Regular', color: '#686868' }}> - {this.state.author}</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Sentence