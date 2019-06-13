import React from 'react';
import { Text } from 'react-native';
import style from 'styled-components';

const NoDataView = style.View`
    padding: 15px;
    justify-content: center;
	align-items: center;    
`;

const NoDataItem = props => (
    <NoDataView>
        <Text style={{fontSize: 20}}>{props.message}</Text>
    </NoDataView>
);

export default NoDataItem;