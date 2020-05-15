import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Button, TextInput, View, Text } from "@shoutem/ui";

import * as Google from "expo-google-app-auth";

class InicioSesion extends Component {
  constructor(props) {
    super(props);
    this.state = { signedIn: false, name: "", photoUrl: "" };
  }

  usuarios = [
    { usuario: "prueba", password: "prueba123" },
    { usuario: "jhon", password: "jhon123" },
    { usuario: "andrea", password: "andrea123" },
    { usuario: "dario", password: "dario123" },
  ];

  validarUsuario = () => {
    const usuario = this.usuarios.find(
      (usu) => usu.usuario === this.state.usuario
    );
    if (usuario) {
      if (usuario.password === this.state.password) {
        this.props.navigation.navigate("Home", { usuario: this.state.usuario });
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  signIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "624991898701-j0p91162fhj93feoprehl9vca0uptjg7.apps.googleusercontent.com",
        //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl,
        });
        this.props.navigation.navigate("Home", { usuario: this.state.name });
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
        {/* <TextInput
          onChangeText={(usu) => this.setState({ usuario: usu })}
          placeholder={"Nombre usuario o correo"}
        />
        <TextInput
          onChangeText={(pass) => this.setState({ password: pass })}
          placeholder={"Contraseña"}
          secureTextEntry
        /> */}
        <Button onPress={this.signIn}>
          <Text>Iniciar Sesión con Google</Text>
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
