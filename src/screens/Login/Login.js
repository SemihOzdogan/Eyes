import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text>LOGİN </Text>
                <Button title='Anasayfaya Git' onPress={() => this.props.navigation.navigate('Main')}>
                </Button>
            </View>
        );
    }
}

export default Login;
