import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const temperatura = 25;
  const distancia = 50;
  const potenciometro = 75;

  const encenderLED = () => {

  };

  const apagarLED = () => {

  };

  return (
    <View style={styles.container}>
      
      <View style={styles.sensorContainer}>
        <Text>Temperatura: {temperatura}°C</Text>
      </View>
      <View style={styles.sensorContainer}>
        <Text>Distancia: {distancia} cm</Text>
      </View>
      <View style={styles.sensorContainer}>
        <Text>Potenciómetro: {potenciometro}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={encenderLED}>
          <Text style={styles.buttonText}>Encender LED</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={apagarLED}>
          <Text style={styles.buttonText}>Apagar LED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sensorContainer: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;