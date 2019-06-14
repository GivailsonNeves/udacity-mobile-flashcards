import React, { Component } from 'react';
import styled from 'styled-components';
import { View, Image } from 'react-native';
import { PrimaryButton, DangerButton } from '../components/shared/Buttons';
import questionMark from '../assets/question_mark.jpg';
import { connect } from 'react-redux';

const DeckView = styled.View`
    flex: 1;    
    justify-content: space-between;
`;

const DeckInfo = styled.View`
    padding: 15px;
    position: absolute;
`;

const DeckTitleText = styled.Text`    
    font-size: 20px;
    color: white;
`;

class Deck extends Component {
    render() {
        const deck = this.props.navigation.state.params;
        const { questions } = this.props;
        const listQuestions = (!!questions && questions[deck.id]) ? questions[deck.id] : [];
        
        return (
            <DeckView>
                {/* createTime */}
                <View>
                    <Image style={{ height: 200, width: null }} source={questionMark} />
                    <DeckInfo>
                        <DeckTitleText>{ deck.name }</DeckTitleText>
                        <DeckTitleText style={{ fontSize: 14 }}>Total cards: { listQuestions.length }</DeckTitleText>
                    </DeckInfo>
                </View>
                <View style={{ padding: 15 }}>
                    <PrimaryButton onPress={() => this.props.navigation.navigate('CardForm', deck) } text="add card" />
                    <PrimaryButton text="start quiz" />
                    <DangerButton text="remove deck" />
                </View>
            </DeckView>
        );
    }
}

const mapStateToProps = ({questions}) => ({
    questions
})

export default connect(mapStateToProps)(Deck);