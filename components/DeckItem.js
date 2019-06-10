import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const DeckItem = props => (
    <TouchableOpacity onPress={() => props.pressItem(props.item)}>
        <View style={styles.item}>
            <Text style={styles.itemText}>{props.item.name}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    item: {
        padding: 30,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        
    },
    itemText: {
        fontSize: 19,
        fontWeight: 'bold'
    }
});

export default DeckItem;