import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Screen3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text> QR </Text>
            </View>
        );
    }
}

export default Screen3;
