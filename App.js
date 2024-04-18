import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const App = () => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.row}>
          <View style={styles.card}>
            <Text style={styles.textoPorcentaje}>80%</Text>
            <Text style={styles.textoEspecificacion}>Temperatura</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.textoPorcentaje}>60%</Text>
            <Text style={styles.textoEspecificacion}>Distancia</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.textoPorcentaje}>90%</Text>
          <Text style={styles.textoEspecificacion}>Potenciómetro</Text>
        </View>
        {/* Botones */}
        <View style={styles.botonesContainer}>
          <View style={styles.boton}>
            <Button title="Guardar" onPress={() => {}} color="#007bff" />
          </View>
          <View style={styles.boton}>
            <Button title="Ver JSON" onPress={() => {}} color="#007bff" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
    width: '48%',
    height: 150,
  },
  textoPorcentaje: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  textoEspecificacion: {
    fontSize: 14,
    color: '#333',
  },
  botonesContainer: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'column', // Cambiado a columna para que los botones se coloquen uno debajo del otro
  },
  boton: {
    width: '100%', // Afecta solo a los botones y no a las tarjetas
    marginBottom: 10,
  },
});

export default App;
