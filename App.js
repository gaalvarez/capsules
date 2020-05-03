import React, { Component } from "react";
import Home from "./vistas/Home";
import InicioSesion from "./vistas/InicioSesion";
import Detalle from "./vistas/Detalle";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { AppLoading } from "expo";
import * as Font from "expo-font";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function CapsulasStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="InicioSesion" component={InicioSesion} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detalle" component={Detalle} />
    </Stack.Navigator>
  );
}

// Componente con la sintaxis de clase
export default class App extends Component {
  state = {
    fuentesCargadas: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      "Rubik-Black": require("./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf"),
      "Rubik-BlackItalic": require("./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf"),
      "Rubik-Bold": require("./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf"),
      "Rubik-BoldItalic": require("./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf"),
      "Rubik-Italic": require("./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf"),
      "Rubik-Light": require("./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf"),
      "Rubik-LightItalic": require("./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf"),
      "Rubik-Medium": require("./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf"),
      "Rubik-MediumItalic": require("./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf"),
      "Rubik-Regular": require("./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf"),
      "rubicon-icon-font": require("./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf"),
    });

    this.setState({ fuentesCargadas: true });
  }

  render() {
    if (!this.state.fuentesCargadas) {
      return <AppLoading />;
    }
    return (
      <NavigationContainer>
        <CapsulasStack />
      </NavigationContainer>
    );
  }
}
