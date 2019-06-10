import React, {Component} from 'react';
import { View, FlatList, Text } from 'react-native';
import NoDataItem from './NoDataItem';
import DeckItem from './DeckItem';
import { withNavigation } from 'react-navigation';

class Decks extends Component {

    constructor(props) {
        super(props);
        this.handleItemPress = this.handleItemPress.bind(this);
    }

    handleItemPress(item) {
       this.props.navigation.navigate('Deck', item);
    }

    render () {

        //  const { listDecks } = props;
        const listDecks = [
            { name: 'item 1'},
            { name: 'item 2'},
            { name: 'item 3'},
            { name: 'item 4'},
            { name: 'item 5'},
            { name: 'item 6'},
            { name: 'item 1'},
            { name: 'item 2'},
            { name: 'item 3'},
            { name: 'item 4'},
            { name: 'item 5'},
            { name: 'item 6'},
        ];

        return (
            <View>
                {
                    listDecks 
                    ? <FlatList
                        data={listDecks}
                        renderItem={item => <DeckItem pressItem={this.handleItemPress} {...item} />}
                        keyExtractor={(_item, index) => index.toString()}
                      />
                    : <NoDataItem message="No decks founded!" />
                }
            </View>
        )
    }
}

export default withNavigation(Decks);