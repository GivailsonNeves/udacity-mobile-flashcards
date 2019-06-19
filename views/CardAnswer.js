import React, { Component } from 'react';
import { View, Image, Animated } from 'react-native';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { PrimaryButton } from '../components/shared/Buttons';
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

const CardFeedback = styled.Text`    
    font-size: 20px;  
    margin-bottom: 10px;
    text-align: center;
`;

const TextCentered = styled.Text`  
    text-align: center;
    margin-top: 5px;
    margin-bottom: 5px;
`;

class CardAnswer extends Component {

    state = {
        deck: null,
        deckCards: [],
        currentCard: 0,
        answer: '',
        answered: false,
        answeredCorrectly: false,
        score: 0,
        cardFinished: false,
        bounceValue: new Animated.Value(1),

    }

    constructor(props) {
        super(props);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.tryAgain = this.tryAgain.bind(this);
    }

    componentDidMount() {
        const { cards } = this.props;
        const deck = this.props.navigation.state.params;
        const deckCards = (cards[deck.id] && cards[deck.id].cards) ? cards[deck.id].cards : [];
        this.setState({
            deck,
            deckCards
        });
    }

    checkAnswer(_currentCard) {
        if (_currentCard.answer == this.state.answer) {
            this.setState({
                answered: true,
                answeredCorrectly: true,
                score: ++this.state.score
            });
        } else {
            this.setState({
                answered: true,
                answeredCorrectly: false
            });
        }
        setTimeout(() => {
            this.nextQuestion();
        }, 2000);
    }

    nextQuestion() {
        if (this.state.currentCard < (this.state.deckCards.length - 1)) {
            this.setState({
                currentCard: ++this.state.currentCard,
                answeredCorrectly: false,
                answered: false,
                answer: ''
            });
        } else {
            this.setState({
                answeredCorrectly: false,
                answered: false,
                answer: '',
                cardFinished: true
            });
        }

        this.animate();
    }

    animate() {
        const { bounceValue } = this.state;
        Animated.sequence([
            Animated.timing(bounceValue, { duration: 200, toValue: 1.3 }),
            Animated.spring(bounceValue, { toValue: 1, friction: 4 })
        ]).start()
    }

    tryAgain() {
        this.setState({
            score: 0,
            currentCard: 0,
            cardFinished: false
        })
    }

    render() {

        const { currentCard, deck, deckCards, answered, answeredCorrectly, bounceValue, answer, cardFinished, score } = this.state;
        const totalCards = deckCards.length;
        const card = deckCards[currentCard];

        return (
            <View>
                {
                    deck && (
                        <View>
                            <Image style={{ height: 200, width: null }} source={questionMark} />
                            <CardInfo>
                                <CardTitleText>{deck.name}</CardTitleText>
                                <Animated.Text
                                    style={{ transform: [{ scale: bounceValue }], fontSize: 20, color: '#ffffff' }}>
                                    {currentCard + 1}/{totalCards}
                                </Animated.Text>
                            </CardInfo>
                            <View style={{ padding: 15 }}>
                                {
                                    !cardFinished

                                        ? <View>
                                            {
                                                card && (
                                                    <View>
                                                        <Animated.Text
                                                            style={{ transform: [{ scale: bounceValue }], fontSize: 20, marginBottom: 10 }}>
                                                            {card.question}
                                                        </Animated.Text>
                                                        <FormatedInput
                                                            key={currentCard}
                                                            value={answer}
                                                            title="What's the answer?"
                                                            onChangeText={text => this.setState({ answer: text })}
                                                        />
                                                        {!answered
                                                            ? <PrimaryButton onPress={() => this.checkAnswer(card)} text="submit" />
                                                            : <CardFeedback>{answeredCorrectly ? 'Very good!' : 'Sorry!'}</CardFeedback>
                                                        }
                                                    </View>
                                                )
                                            }
                                        </View>
                                        : <View>
                                            <Animated.Text
                                                style={{ transform: [{ scale: bounceValue }], fontSize: 20, marginBottom: 10, textAlign: 'center' }}>
                                                Finished!
                                            </Animated.Text>
                                            <TextCentered>your score is {score} of {totalCards} cards.</TextCentered>
                                            <PrimaryButton onPress={() => this.tryAgain()} text="try again" />
                                        </View>
                                }
                            </View>
                        </View>
                    )
                }
            </View>

        );
    }
}

const mapStateToProps = ({ cards }) => {
    return {
        cards
    }
};

export default connect(mapStateToProps)(CardAnswer);