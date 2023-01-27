import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Screen4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> SETTİNGS </Text>
      </View>
    );
  }
}

export default Screen4;
