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
        const { cards } = this.props;
        const totalCards = (cards[deck.id] && cards[deck.id].cards) ? cards[deck.id].cards.length : 0;
        
        return (
            <DeckView>
                {/* createTime */}
                <View>
                    <Image style={{ height: 200, width: null }} source={questionMark} />
                    <DeckInfo>
                        <DeckTitleText>{ deck.name }</DeckTitleText>
                        <DeckTitleText style={{ fontSize: 14 }}>Total cards: { totalCards }</DeckTitleText>
                    </DeckInfo>
                </View>
                <View style={{ padding: 15 }}>
                    <PrimaryButton onPress={() => this.props.navigation.navigate('CardForm', deck) } text="add card" />
                    <PrimaryButton disabled={totalCards == 0} onPress={() => this.props.navigation.navigate('CardAnswer', deck) } text="start quiz" />
                    <DangerButton text="remove deck" />
                </View>
            </DeckView>
        );
    }
}

const mapStateToProps = ({cards}) => ({
    cards
})

export default connect(mapStateToProps)(Deck);