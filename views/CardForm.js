import React, { Component } from 'react';
import { View, Image, KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components';
import ask from '../assets/ask.jpg';
import { PrimaryButton } from '../components/shared/Buttons';
import FormatedInput from '../components/shared/Inputs';
import { connect } from 'react-redux';

const CardFormView = styled.View`
    flex: 1;
    justify-content: space-between;
`;

const CardFormViewInner = styled.View`
    padding: 15px;
`;

class CardForm extends Component {

    state = {
        question: '',
        answer: ''
    }

    constructor (props) {
        super(props);
        this.saveCard = this.saveCard.bind(this);
    }

    saveCard () {

    }

    render() {
        return (
            <CardFormView>
                <View>
                    <Image style={{ height: 200, width: null }} source={ask} />
                    <CardFormViewInner>
                        <KeyboardAvoidingView behavior="padding" enabled>
                            <FormatedInput
                                value={this.state.question}
                                title="Tell us the question:"
                                onChangeText={text => this.setState({ question: text })}
                            />
                            <FormatedInput
                                value={this.state.answer}
                                title="What's the answer?"
                                onChangeText={text => this.setState({ answer: text })}
                            />
                        </KeyboardAvoidingView>
                    </CardFormViewInner>
                </View>
                <CardFormViewInner>
                    <PrimaryButton onPress={ this.saveCard } text="submit" />
                </CardFormViewInner>
            </CardFormView>
        );
    }
}

export default connect()(CardForm);