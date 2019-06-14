import React, { Component } from 'react';
import styled from 'styled-components';
import { PrimaryButton, DangerButton } from '../components/shared/Buttons';

const DeckView = styled.View`
    padding: 15px;
`;

const DeckTitleText = styled.Text`
    padding: 15px;
    text-align: center;
    font-size: 20px;
`;
class Deck extends Component {
    render() {
        const deck = this.props.navigation.state.params;
        
        return (
            <DeckView>
                {/* createTime */}
                <DeckTitleText>{ deck.name }</DeckTitleText>
                <PrimaryButton text="add question" />
                <PrimaryButton text="answer questions" />
                <DangerButton text="remove deck" />
            </DeckView>
        );
    }
}

export default Deck;