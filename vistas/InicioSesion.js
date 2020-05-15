import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Button, TextInput, View, Text } from "@shoutem/ui";
import * as Google from "expo-google-app-auth";

class InicioSesion extends Component {
  constructor(props) {
    super(props);
    this.state = { estaLogeado: false, nombre: "", urlFoto: "" };
  }

  signIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "624991898701-h7h390aadb6ic7ds0darmefpgfrp2bev.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });
      if (result.type === "success") {
        this.setState({
          estaLogeado: true,
          nombre: result.user.name,
          urlFoto: result.user.photoUrl,
        });
        this.props.navigation.navigate("Home", {
          usuario: this.state.nombre,
          foto: this.state.urlFoto,
        });
      } else {
        console.log("cancelled");
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  render() {
    return (
      <View style={estilos.contenedor}>
        <Button onPress={this.signIn}>
          <Text>Iniciar con Google</Text>
        </Button>
      </View>
    );
  }
}

export default InicioSesion;

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },
});
