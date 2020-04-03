import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Image, Button } from "react-native";

// Componente con la sitasix de función
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello world</Text>
//     </View>
//   );
// }

// Componente tarjeta
class Card extends Component {
  state = { sinVer: true };

  render(props) {
    return (
      //Sintaxis JSX puedo usar código javascript con {}
      <View
        style={
          this.state.sinVer
            ? { backgroundColor: "blue" }
            : { backgroundColor: "gray" }
        }
      >
        <Image
          source={this.props.valor.icon}
          style={{ width: 100, height: 100 }}
        />
        <Text>{this.props.valor.titulo}</Text>
        <Text>{this.props.valor.descripcion}</Text>
        <Button
          onPress={() => {
            this.setState({ sinVer: false });
          }}
          title={"Ver"}
          disabled={!this.state.sinVer}
        />
      </View>
    );
  }
}

// Componente con la sintaxis de clase
export default class App extends Component {
  tarjetas = [
    {
      titulo: "Crear Componentes",
      descripcion: "Hay dos formas de crear comonentes en react native",
      icon: "https://reactnative.dev/docs/assets/p_cat1.png"
    },
    {
      titulo: "Sintaxis JSX",
      descripcion: "Similar a html pero puedo usar javascript dentro",
      icon: "https://reactnative.dev/docs/assets/p_cat1.png"
    },
    {
      titulo: "Props",
      descripcion: "Propiedades para configurar o personalizar un componente",
      icon: "https://reactnative.dev/docs/assets/p_cat1.png"
    }
  ];

  render() {
    return (
      <View style={styles.container}>
        <Text>Capsulas</Text>
        <Card valor={this.tarjetas[0]} />
        <Card valor={this.tarjetas[1]} />
        <Card valor={this.tarjetas[2]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
