import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getSensors, deleteSensor } from '../api'

const DatosScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <Text style={styles.textItem}>Temperatuta : 100</Text>
          <Text style={styles.textItem}>Potenciómetro: 50</Text>
          <Text style={styles.textItem}>Distancia: 150</Text>
          <Text style={styles.textItem}>Led: Encendido</Text>
        </View>
        <TouchableOpacity style={styles.buttonDelete}>
          <Text style={styles.buttonText}>Eliminar</Text>
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
    backgroundColor: '#1C1A19',
    paddingVertical: 20,
  },
  card: {
    width: '80%', // Ancho del card ajustado
    backgroundColor: '#303030',
    borderRadius: 10,
    marginBottom: '5%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  cardBody: {
    marginBottom: 10,
  },
  textItem: {
    fontSize: 14,
    color: '#FFF',
  },
  buttonDelete: {
    backgroundColor: '#F1480F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default DatosScreen;
