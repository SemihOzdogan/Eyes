import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> HOME </Text>
        <Button title="Login'e Git" onPress={() => this.props.navigation.navigate("Login")} />
      </View>
    );
  }
}

export default Screen1;
