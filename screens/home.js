import React from 'react';

import Sentence from './components/home/sentence'
import HomeButtons from './components/home/homeButtons'
import ContainerBase from '../components/ContainerBase'

class Home extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ContainerBase navigation={this.props.navigation}>
                <Sentence />
                <HomeButtons navigation={this.props.navigation}></HomeButtons>
            </ContainerBase>
        );
    }
}
export default Home;