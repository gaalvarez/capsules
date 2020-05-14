import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text, Button, Icon } from "@shoutem/ui";

class Card extends Component {
  state = { sinVer: true };

  render() {
    return (
      <View style={[styles.card, styles.shadow]}>
        <Image
          source={{ uri: this.props.valor.icon }}
          style={{ width: 100, height: 100 }}
        />
        <Text>{this.props.valor.titulo}</Text>
        <Text>{this.props.valor.descripcion}</Text>
        <Button
          onPress={() =>
            this.props.navigation.navigate("Detalle", {
              capsula: this.props.valor,
            })
          }
          title={"Leer más..."}
        >
          <Text>Leer Más...</Text>
        </Button>
      </View>
    );
  }
}

export default Card;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    padding: 10,
  },
  shadow: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 10,
    width: "95%",
    borderRadius: 10,
    shadowColor: "navy",
    shadowOpacity: 0.9,
    elevation: 10,
  },
});
