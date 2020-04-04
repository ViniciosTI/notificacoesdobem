import React from 'react'
import { Body, Container, Header, Left, Title, Right, Icon } from 'native-base';
import { View } from 'react-native'
import { withUserContext } from '../../components/UserContext';
import firebase from 'react-native-firebase';
import FlashMessage from "react-native-flash-message";


const Banner = firebase.admob.Banner;
class ContainerBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.uuid = 'ca-app-pub-3167735252489143/3226238183';
        console.log('teste dev')
        console.log(__DEV__)
        console.log(this.props.userContext.adMobRequest.build())
        if (Platform.OS == 'android') {
            this.uuid = 'ca-app-pub-3167735252489143/8982831436'
        }
        if (__DEV__) {
            this.uuid = 'ca-app-pub-3940256099942544/2934735716'
        }
    }
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
                <Banner
                    size={"SMART_BANNER"}
                    request={this.props.userContext.adMobRequest.build()}
                    unitId={this.uuid}
                    onAdLoaded={() => {
                        console.log('Advert loaded');
                    }}
                />
                <View style={{ flex: 1 }}>
                    {this.props.children}
                </View>
                <FlashMessage position="bottom" />
            </Container>
        )
    }
}

export default withUserContext(ContainerBase)