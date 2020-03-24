import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Body, Container, Header, Left, Title, Icon, Right, Text } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Category from './components/settings/Category';

// import Spinner from 'react-native-loading-spinner-overlay';
import UserResource from '../resources/UserResource';
import { AndroidBackHandler } from 'react-navigation-backhandler';

const mainColor = '#F7DF86'
const textColor = 'black'
const title = 'Boa tarde 🌞'
const subtitle = 'Escolha até 3 categorias'
const description = 'Receba mensagens que mais tem a ver com você para dar aquela motivada durante a tarde'
const period = 1


const styles = StyleSheet.create({
    header: { backgroundColor: mainColor },
    backBtn: { color: textColor, marginRight: 15, marginLeft: 5 },
    title: { fontSize: 20, fontFamily: 'Lato-Regular', color: textColor },
    content: { flex: 1, backgroundColor: mainColor, color: textColor },
    h1: { fontSize: 20, fontFamily: 'Lato-Regular', color: textColor },
    container: { padding: 30, flex: 1 },
    description: { fontSize: 15, marginTop: 10, fontFamily: 'Lato-Regular', color: textColor },
    scroll: { marginTop: 20, flexGrow: 1 }

});

class Afternoon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            totalSelected: 3,
            loading: true,
            title: title,

        };

        this.onSelectCategory = this.onSelectCategory.bind(this)
        this.resource = new UserResource()
    }

    static navigationOptions = ({ navigation }) => ({
        header: (
            <View></View>
        ),
        drawerLockMode: 'locked-closed'
    })

    async componentDidMount() {
        // const advert = firebase.admob().interstitial('ca-app-pub-3940256099942544/1033173712')
        // advert.loadAd(this.props.userContext.adMobRequest.build());

        let response = await this.resource.getCategories(this.props.userContext.user.uuid, period)
        this.setState({
            ...this.state,
            categories: response,
            loading: false
        })
        // setTimeout(() => {
        //     if (advert.isLoaded()) {
        //         Reactotron.log('Propagando mostrar')
        //         advert.show();
        //     } else {
        //         Reactotron.log('Sem propaganda em um segundo')
        //     }
        //     this.setState({
        //         showList:true
        //     })
        // }, 1000);


    }

    updateCategories() {
        let selected = this.state.categories.filter((category) => {
            return category.selected
        })
        this.resource.postCategories(this.props.userContext.user.uuid, period, selected)

    }
    onBackButtonPressAndroid = () => {
        this.updateCategories();
    };

    renderList() {
        // if(!this.state.showList){
        //     return (
        //         <View style={{flex:1,justifyContent:'center',alignContent: 'center',}}>
        //             <ActivityIndicator color='white' />
        //         </View>
        //     )
        // }
        return (<View style={styles.container}>
            <Text style={styles.h1}>{subtitle}</Text>
            <Text style={styles.description}>{description}</Text>
            <ScrollView style={styles.scroll}>
                {this.state.categories.map((category) =>
                    <Category color='black' onSelected={this.onSelectCategory} category={category} key={category.id} />
                )}

            </ScrollView>
        </View>)
    }


    onSelectCategory(categoryPressed) {

        var categories = []
        var countSelected = 0;

        this.state.categories.map((category) => {
            if (category.selected) {
                countSelected++
            }
        });

        this.state.categories.map((category) => {
            if (categoryPressed.id == category.id) {

                if (countSelected < this.state.totalSelected || category.selected) {
                    category.selected = !category.selected
                }

            }
            categories.push(category)
        });

        this.setState({
            ...this.state,
            categories: categories
        })
    }

    async goBack() {
        //console.log(this.state.categories)
        this.updateCategories();
        this.props.navigation.goBack()
    }

    render() {
        return (
            <AndroidBackHandler onBackPress={this.onBackButtonPressAndroid}>
                <Container>
                    {/* <Spinner
          visible={this.state.loading}
          overlayColor={mainColor}
          textContent={'carregando...'}
          textStyle={{ color: 'white', backgroundColor: mainColor }}
        /> */}
                    <Header style={styles.header} androidStatusBarColor={mainColor}>
                        <Left>
                            <Icon onPress={() => this.goBack()} type="FontAwesome" name="angle-left" style={styles.backBtn} />
                        </Left>
                        <Body>
                            <Title style={styles.title}>{this.state.title}</Title>
                        </Body>
                        <Right />
                    </Header>

                    <View style={styles.content}>
                        {this.renderList()}
                    </View>
                </Container>
            </AndroidBackHandler>
        );
    }
}



export default Afternoon;
