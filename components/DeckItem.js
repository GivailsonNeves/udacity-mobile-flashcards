import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from '@fortawesome/react-native-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
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

const DeckItem = props => (
    <TouchableOpacity onPress={() => props.pressItem(props.item)}>
        <DeckItemView>
            <DeckItemInnerView>
                <InnerView>
                    <Text>{props.item.name}</Text>
                    <Text>Total Questions: {props.item.questions.length}</Text>
                </InnerView>
                <InnerViewIcon>
                    <FontAwesomeIcon icon={faQuestion} />
                </InnerViewIcon>
            </DeckItemInnerView>
        </DeckItemView>
    </TouchableOpacity>
);

export default DeckItem;