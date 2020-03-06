import React, { Component } from 'react';
import ContainerBase from '../components/ContainerBase'
import { Button, View } from 'react-native';


class About extends Component {
    render() {
        return (
            <ContainerBase navigation={this.props.navigation}>
                <View style={{ flex: 1}}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Home')}
                        title="Go to Home"
                    />
                </View>
            </ContainerBase>
        );
    }
}

export default About