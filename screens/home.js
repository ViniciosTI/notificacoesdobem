import React from 'react';

import Sentence from './components/home/sentence'
import HomeButtons from './components/home/homeButtons'
import ContainerBase from './components/ContainerBase'
import { withUserContext } from '../components/UserContext'

class Home extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ContainerBase navigation={this.props.navigation}>
                <Sentence author={this.props.userContext.user.message.author} phrase={this.props.userContext.user.message.message} />
                <HomeButtons author={this.props.userContext.user.message.author} phrase={this.props.userContext.user.message.message} ></HomeButtons>
            </ContainerBase>
        );
    }
}
export default withUserContext(Home);