import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ViewShot from "react-native-view-shot";

class Sentence extends Component {
    componentDidMount() {
        this.refs.sentence.capture().then(uri => {
            console.log("do something with ", uri);
        });
    }
    getFontSize() {
        var size = this.props.phrase.length
        if (size >= 200) {
            return 25
        }
        if (size >= 100) {
            return 30
        }
        return 35
    }
    getAuthorFontSize() {
        var size = this.props.phrase.length
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
                <ViewShot style={{ flex: 1 }} ref="sentence" options={{ format: "jpg" }}>
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
                            <Text style={{ textAlign: 'center', fontSize: this.getFontSize(), fontFamily: 'Lato-Light', color: '#404040' }}>{this.props.phrase}</Text>
                        </View>
                        <View style={{ padding: 15, }}>
                            <Text style={{ textAlign: 'center', fontSize: this.getAuthorFontSize(), fontFamily: 'Lato-Regular', color: '#686868' }}> - {this.props.author}</Text>
                        </View>
                    </View>
                </ViewShot>
            </ScrollView>
        );
    }
}

export default Sentence