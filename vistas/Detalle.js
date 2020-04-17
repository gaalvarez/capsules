import React, { Component } from "react";
import { View, Text } from "react-native";

class Detalle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> Titulo </Text>
        <Text> Descripción </Text>
        <Text> Explicación de éste detalle </Text>
      </View>
    );
  }
}

export default Detalle;
