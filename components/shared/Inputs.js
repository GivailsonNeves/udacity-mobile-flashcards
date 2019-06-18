import React, { Component } from 'react';
import styled from 'styled-components';
import { View, Text} from 'react-native';

const CustomTextInput = styled.TextInput`
    border: 1px #ccc solid;
    width: 100%;
    padding: 8px 5px;
    margin: 5px 0;
`;


class FormatedInput extends Component {
    state = {
        value: ''
    }
    constructor (props) {
        super(props);
        this.handleChangeText = this.handleChangeText.bind(this);        
    }

    componentDidMount () {
        this.setState({ value: this.props.value });
    }

    handleChangeText (text) {
        this.setState({value: text});
        if (this.props.onChangeText)
            this.props.onChangeText(this.state.value);
    }

    render () {
        return (
            <View>
                <Text>{this.props.title}</Text>
                <CustomTextInput
                    onChangeText={text => this.handleChangeText(text)}
                    autoCapitalize="none"
                    defaultValue={this.state.value} />
            </View>
        )
    }
}

export default FormatedInput;