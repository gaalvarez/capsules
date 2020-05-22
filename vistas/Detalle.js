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
        <Text> {this.props.route.params.capsula.titulo} </Text>
        <Text> Descripción </Text>
        <Text> {this.props.route.params.capsula.descripcion} </Text>
      </View>
    );
  }
}

export default Detalle;
