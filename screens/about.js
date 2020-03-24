import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import ContainerBase from '../components/ContainerBase'
import Config from 'react-native-config'
import { StyleSheet, ActivityIndicator, View } from 'react-native';

export default class AboutScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    ActivityIndicatorLoadingView() {
        //making a view to show to while loading the webpage
        return (
            <ActivityIndicator
                color="#EA807C"
                size="large"
                style={styles.ActivityIndicatorStyle}
            />
        );
    }

    render() {
        return (
            <ContainerBase navigation={this.props.navigation}>
                <WebView
                    source={{ uri: Config.ABOUT_URL }}
                    style={styles.WebViewStyle}
                    //Enable Javascript support
                    javaScriptEnabled={true}
                    //For the Cache
                    domStorageEnabled={true}
                    //View to show while loading the webpage
                    renderLoading={this.ActivityIndicatorLoadingView}
                    //Want to show the view or not
                    startInLoadingState={true}
                />
            </ContainerBase>
        );
    }
}

const styles = StyleSheet.create({
    WebViewStyle: {
        flex: 1,
        margin: 15,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ActivityIndicatorStyle: {
        flex: 1,
        justifyContent: 'center',
    },
});