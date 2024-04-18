import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const App = () => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.row}>
          <View style={styles.card}>
            <View style={styles.disenoPorcentaje}>
              <Text style={styles.textoPorcentaje}>80%</Text>
            </View>
            <Text style={styles.textoEspecificacion}>Temperatura</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.disenoPorcentaje}>
              <Text style={styles.textoPorcentaje}>60%</Text>
            </View>
            <Text style={styles.textoEspecificacion}>Distancia</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.disenoPorcentaje}>
            <Text style={styles.textoPorcentaje}>90%</Text>
          </View>
          <Text style={styles.textoEspecificacion}>Potenciómetro</Text>
        </View>
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
    backgroundColor: '#1C1A19',
  },
  innerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#303030',
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
    height: 200,
  },
  textoPorcentaje: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 15,
  },
  textoEspecificacion: {
    fontSize: 14,
    color: '#FFF',
  },
  botonesContainer: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'column',
  },
  boton: {
    width: '100%',
    marginBottom: 10,
  },
  disenoPorcentaje: {
    position: 'relative',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
});

export default App;
