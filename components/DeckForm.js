import React, { Component } from 'react';
import styled from 'styled-components';
import { KeyboardAvoidingView } from 'react-native';
import FormatedInput from './shared/Inputs';
import { connect } from 'react-redux';
import { createDeck } from '../actions/decks';

const ViewCentered = styled.View`
    padding: 15px;
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
        deckName: '',
        fieldChanged: false
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
        this.setState({ deckName: '', fieldChanged: !this.state.fieldChanged});
        this.props.navigation.goBack();
    }

    render() {
        return (
            <ViewCentered>
                <KeyboardAvoidingView behavior="padding" enabled>
                    <FormatedInput
                        key={this.state.fieldChanged}
                        value={this.state.deckName}
                        title="Name your new deck:"
                        onChangeText={ this.handleChangeText }
                    />                    
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