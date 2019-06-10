import React from 'react';
import { View, Text } from 'react-native';

const NoDataItem = props => (
    <View>
        <Text>{props.message}</Text>
    </View>
);

export default NoDataItem;