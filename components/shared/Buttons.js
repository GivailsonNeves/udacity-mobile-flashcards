import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

const PrimaryButtonText = styled.Text`
    text-align: center;
    color: #ffffff;
    background-color: blue;
    padding: 8px 5px;
    margin-bottom: 15px;
`;

const DangerButtonText = styled.Text`
    text-align: center;
    color: red;
    border-color: red;
    border-width: 1;
    padding: 8px 5px;
    margin-bottom: 15px;
`;

export const PrimaryButton = props => (
    <TouchableOpacity onPress={() => props.onPress && props.onPress()}>
        <PrimaryButtonText>
            {props.text}
        </PrimaryButtonText>
    </TouchableOpacity>
)

export const DangerButton = props => (
    <TouchableOpacity onPress={() => props.onPress && props.onPress()}>
        <DangerButtonText>
            {props.text}
        </DangerButtonText>
    </TouchableOpacity>
)