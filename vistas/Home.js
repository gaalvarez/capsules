import React, { Component } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import Card from "../componentes/Card";

class Home extends Component {
  capsulas = [
    {
      titulo: "Crear Componentes",
      descripcion: "Hay dos formas de crear comonentes en react native",
      icon: "https://reactnative.dev/docs/assets/p_cat1.png",
    },
    {
      titulo: "Sintaxis JSX",
      descripcion: "Similar a html pero puedo usar javascript dentro",
      icon: "https://reactnative.dev/docs/assets/p_cat1.png",
    },
    {
      titulo: "Props",
      descripcion: "Propiedades para configurar o personalizar un componente",
      icon: "https://reactnative.dev/docs/assets/p_cat1.png",
    },
    {
      titulo: "Props",
      descripcion: "Propiedades para configurar o personalizar un componente",
      icon: "https://reactnative.dev/docs/assets/p_cat1.png",
    },
    {
      titulo: "Props",
      descripcion: "Propiedades para configurar o personalizar un componente",
      icon: "https://reactnative.dev/docs/assets/p_cat1.png",
    },
    {
      titulo: "Props",
      descripcion: "Propiedades para configurar o personalizar un componente",
      icon: "https://reactnative.dev/docs/assets/p_cat1.png",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={ScrollView} contentContainerStyle={styles.container}>
        <Text>Capsulas</Text>
        {this.capsulas.map((capsula, key) => {
          return <Card navigation={this.props.navigation} key={key} valor={capsula} />;
        })}
      </ScrollView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  ScrollView: {
    width: '100%'
  },
  container: {
    margin: 20,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
