import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import style from 'styled-components';

const DeckItemView = style.View`
    padding: 15px;
    margin-bottom: 10px;    
    border-color: #ddd;
    border-width: 1;
    border-radius: 12;
    elevation: 4;
`;
const DeckItemInnerView = style.View`    
    flex-direction: row;
    margin-top: 5px;
`;

const InnerView = style.View`
    flex: 1;
`;

const InnerViewIcon = style.View`
    width: 50px;
    justify-content: center;
	align-items: flex-end;    
`;

const DeckItem = props => {
    const {cards, item} = props;
    const totalCards = cards[item.id] && cards[item.id].cards ? cards[item.id].cards.length : 0;
    return (
        <TouchableOpacity onPress={() => props.pressItem(item)}>
            <DeckItemView>
                <DeckItemInnerView>
                    <InnerView>
                        <Text>{item.name}</Text>
                        <Text>Total cards: {totalCards}</Text>
                    </InnerView>
                    <InnerViewIcon>

                    </InnerViewIcon>
                </DeckItemInnerView>
            </DeckItemView>
        </TouchableOpacity>
    )
};

const mapStateToProps = ({ cards }) => ({
    cards
});

export default connect(mapStateToProps)(DeckItem);