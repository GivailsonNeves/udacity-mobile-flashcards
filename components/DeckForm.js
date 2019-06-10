import React from 'react';
import styled from 'styled-components';
import {Text, TouchableOpacity} from 'react-native';

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

const PrimaryButton = styled.TouchableOpacity`
    padding: 8px 5px;
    margin: 5px 0;
    background-color: #cccccc;
`

const PrimaryButtonText = styled.Text`
    text-align: center;
    color: #ffffff;
`;

const DeckForm = props => (
    <ViewCentered>
        <Text>Name your new deck:</Text>
        <TextInputDeck />
        <PrimaryButton>
            <PrimaryButtonText onPress={() => props.navigation.goBack()}>Enviar</PrimaryButtonText>
        </PrimaryButton>
    </ViewCentered>
);

export default DeckForm;