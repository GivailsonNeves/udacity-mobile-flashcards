import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { PrimaryButton, DangerButton } from '../components/shared/Buttons';
import FormatedInput from '../components/shared/Inputs';
import questionMark from '../assets/question_mark.jpg';

const CardInfo = styled.View`
    padding: 15px;
    position: absolute;
`;

const CardTitleText = styled.Text`    
    font-size: 20px;
    color: white;
`;

const CardQuestionText = styled.Text`    
    font-size: 20px;    
`;

class CardAnswer extends Component {
    state = {
        currentCard: 0,
        answer: ''
    }

    render() {
        
        const deck = this.props.navigation.state.params;
        const { cards } = this.props;
        const deckCards = (cards[deck.id] && cards[deck.id].cards) ? cards[deck.id].cards : [];
        const totalCards = deckCards.length;
        const { currentCard } = this.state;
        const card = deckCards[currentCard];

        return (
            <View>
                <Image style={{ height: 200, width: null }} source={questionMark} />
                <CardInfo>
                    <CardTitleText>{deck.name}</CardTitleText>
                    <CardTitleText>{currentCard + 1}/{totalCards}</CardTitleText>
                </CardInfo>
                <View style={{padding: 15}}>
                    {
                        card && (
                            <View>
                                <CardQuestionText>{card.question}</CardQuestionText>
                                <FormatedInput
                                    value={this.state.answer}
                                    title="What's the answer?"
                                    onChangeText={text => this.setState({ answer: text })}
                                />
                                <PrimaryButton>
                                    Submit
                                </PrimaryButton>
                            </View>
                        )
                    }
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({cards}) => ({
    cards
});

export default connect(mapStateToProps)(CardAnswer);