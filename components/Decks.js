import React, {Component} from 'react';
import { View } from 'react-native';
import NoDataItem from './NoDataItem';
import DeckItem from './DeckItem';
import { withNavigation } from 'react-navigation';
import style from 'styled-components';
import { connect } from 'react-redux';


const DeckListView = style.FlatList`
    padding: 15px; 
    padding-bottom: 40px;   
`;

class Decks extends Component {

    constructor(props) {
        super(props);
        this.handleItemPress = this.handleItemPress.bind(this);
    }

    handleItemPress(item) {
       this.props.navigation.navigate('Deck', item);
    }

    render () {

        const { decks } = this.props;
        const decksIds = Object.keys(decks);
        const decksList = !!decksIds.length ? decksIds.map(i => decks[i]).sort( (a, b) => b - a ) : [];

        return (
            <View>
                {
                    (!!decksList.length)
                        ? <DeckListView
                            data={decksList}
                            renderItem={item => <DeckItem pressItem={this.handleItemPress} {...item} />}
                            keyExtractor={(_item, index) => index.toString()}
                          />
                        : <NoDataItem message="No decks founded!" />
                }
            </View>
        )
    }
}

const mapStateToProps = ({ decks }) => ({    
    decks
});

export default connect(mapStateToProps)(withNavigation(Decks));