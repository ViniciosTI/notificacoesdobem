import React from 'react'
import { Body, Container, Header, Left, Title, Right, Icon } from 'native-base';

export default class ContainerBase extends React.Component {
    render() {
        return (
            <Container >
                <Header iosBarStyle="light-content" style={{ backgroundColor: '#EA807C', zIndex: 999 }} androidStatusBarColor="#EA807C">
                    <Left>
                        <Icon type="Ionicons" name="md-menu" style={{ color: "#ffffff" }}
                            onPress={() => this.props.navigation.toggleDrawer()}
                        />
                    </Left>
                    <Body>
                        <Title style={{ fontSize: 20, color: 'white' }}>NdB</Title>
                    </Body>
                    <Right />
                </Header>
                {this.props.children}
            </Container>
        )
    }
}