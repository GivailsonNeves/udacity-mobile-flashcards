import React, { Component } from 'react';
import styled from 'styled-components';
import { Text, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { createDeck } from '../actions/decks';

const ViewCentered = styled.View`
    flex: 1;
    justify-content: center;
    padding: 15px;
`;
const TextInputDeck = styled.TextInput`
    border: 1px #ccc solid;
    width: 100%;
    padding: 8px 5px;
    margin: 5px 0;
`;

const PrimaryButton = styled.TouchableOpacity``;

const PrimaryButtonText = styled.Text`
    text-align: center;
    color: #ffffff;
    background-color: blue;
    padding: 8px 5px;
`;

class DeckForm extends Component {

    state = {
        deckName: ''
    }

    constructor(props) {
        super(props);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.saveDeck = this.saveDeck.bind(this);
    }

    handleChangeText(text) {
        this.setState({ deckName: text });
    }

    saveDeck() {
        this.props.onCreateDeck(this.state.deckName);
        this.props.navigation.goBack();
    }

    render() {
        return (
            <ViewCentered>
                <KeyboardAvoidingView behavior="padding" enabled>
                    <Text>Name your new deck:</Text>
                    <TextInputDeck
                        onChangeText={text => this.handleChangeText(text)}
                        value={this.state.deckName} />
                    <PrimaryButton>
                        <PrimaryButtonText onPress={() => this.saveDeck()}>Enviar</PrimaryButtonText>
                    </PrimaryButton>
                </KeyboardAvoidingView>
            </ViewCentered>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onCreateDeck: (deckName) => {
            dispatch(createDeck(deckName));
        }
    }
}

export default connect(null, mapDispatchToProps)(DeckForm);