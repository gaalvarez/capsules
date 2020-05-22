import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Card from '../componentes/Card';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capsulas: [],
      capsulasCargando: true,
    };
  }

  componentDidMount() {
    fetch('http://192.168.0.11:3000/capsulas')
      .then((response) => {
        return response.json();
      })
      .then((resJson) => this.setState({ capsulas: resJson }))
      .catch((error) => console.error(error))
      .finally(() => this.setState({ capsulasCargando: false }));

    // fetch('http://192.168.0.11:3000/capsulas', {
    //   method: 'POST',
    //   headers: { 'content-type': 'application/json' },
    //   body: JSON.stringify({
    //     titulo: 'Prueba creacion 2',
    //     descripcion: 'des de preuba creacion 2',
    //     icon:
    //       'https://www.pushwoosh.com/wp-content/uploads/2016/07/react-logo.png',
    //   }),
    // });
  }

  render() {
    return (
      <ScrollView style={ScrollView} contentContainerStyle={styles.container}>
        <Text>Capsulas</Text>

        {this.state.capsulasCargando ? (
          <ActivityIndicator />
        ) : (
          this.state.capsulas.map((capsula, key) => {
            return (
              <Card
                navigation={this.props.navigation}
                key={key}
                valor={capsula}
              />
            );
          })
        )}
      </ScrollView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  ScrollView: {
    width: '100%',
  },
  container: {
    margin: 20,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
