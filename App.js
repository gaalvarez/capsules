import React, { Component } from "react";
import Home from "./vistas/Home";
import Detalle from "./vistas/Detalle";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function CapsulasStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detalle" component={Detalle} />
    </Stack.Navigator>
  );
}

// Componente con la sintaxis de clase
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <CapsulasStack />
      </NavigationContainer>
    );
  }
}
