import React, { Component } from 'react';
import styled from 'styled-components';

const DeckView = styled.View`
    padding: 15px;
`;

const DeckTitleText = styled.Text`
    padding: 15px;
    text-align: center;
    font-size: 20px;
`;

const PrimaryButton = styled.TouchableOpacity`
    margin-bottom: 15px;
`;

const PrimaryButtonText = styled.Text`
    text-align: center;
    color: #ffffff;
    background-color: blue;
    padding: 8px 5px;
`;


class Deck extends Component {
    render() {
        const deck = this.props.navigation.state.params;

        
        return (
            <DeckView>
                {/* questions, createTime */}
                <DeckTitleText>{ deck.name }</DeckTitleText>
                <PrimaryButton>
                    <PrimaryButtonText>Cadastrar novo</PrimaryButtonText>
                </PrimaryButton>
                <PrimaryButton>
                    <PrimaryButtonText>Responder questões</PrimaryButtonText>
                </PrimaryButton>
            </DeckView>
        );
    }
}

export default Deck;