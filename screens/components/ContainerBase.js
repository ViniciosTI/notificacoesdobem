import React from 'react'
import { Body, Container, Header, Left, Title, Right, Icon } from 'native-base';
import { View } from 'react-native'
import { withUserContext } from '../../components/UserContext';
import FlashMessage from "react-native-flash-message";
import Banner from './banner'

class ContainerBase extends React.Component {
    render() {
        return (
            <Container >
                <Header iosBarStyle="light-content" style={{ backgroundColor: '#EA807C', zIndex: 999 }} androidStatusBarColor="#EA807C">
                    <Left>
                        <Icon type="Ionicons" name="md-menu" style={{ color: "#ffffff", marginRight: 15, marginLeft: 5 }}
                            onPress={() => this.props.navigation.toggleDrawer()}
                        />
                    </Left>
                    <Body>
                        <Title style={{ fontSize: 20, color: 'white' }}>NdB</Title>
                    </Body>
                    <Right />
                </Header>
                <Banner />
                <View style={{ flex: 1 }}>
                    {this.props.children}
                </View>
                <FlashMessage position="bottom" />
            </Container>
        )
    }
}

export default withUserContext(ContainerBase)