import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Button, TextInput, View, Text } from "@shoutem/ui";

class InicioSesion extends Component {
  constructor(props) {
    super(props);
    this.state = { usuario: "", password: "" };
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

  render() {
    return (
      <View style={estilos.contenedor}>
        <TextInput
          onChangeText={(usu) => this.setState({ usuario: usu })}
          placeholder={"Nombre usuario o correo"}
        />
        <TextInput
          onChangeText={(pass) => this.setState({ password: pass })}
          placeholder={"Contraseña"}
          secureTextEntry
        />
        <Button onPress={this.validarUsuario}>
          <Text>Iniciar Sesión</Text>
        </Button>
        <Text>{this.state.usuario}</Text>
        <Text>{this.state.password}</Text>
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
