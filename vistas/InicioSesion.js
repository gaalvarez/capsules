import React, { Component } from "react";
import { Button, TextInput, View, Text } from "@shoutem/ui";

class InicioSesion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <TextInput placeholder={"Nombre usuario o correo"} />
        <TextInput placeholder={"Contraseña"} secureTextEntry />
        <Button>
          <Text>Iniciar Sesión</Text>
        </Button>
      </View>
    );
  }
}

export default InicioSesion;
