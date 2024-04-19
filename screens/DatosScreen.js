import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { getSensors, deleteSensor } from '../api';

const DatosScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <View style={styles.row}>
            <FontAwesome name="thermometer" size={20} color="#FFF" />
            <Text style={styles.textItem}>Temperatura: 100</Text>
          </View>
          <View style={styles.row}>
            <FontAwesome name="sliders" size={20} color="#FFF" />
            <Text style={styles.textItem}>Potenciómetro: 50</Text>
          </View>
          <View style={styles.row}>
            <FontAwesome name="arrows-h" size={20} color="#FFF" />
            <Text style={styles.textItem}>Distancia: 150</Text>
          </View>
          <View style={styles.row}>
            <FontAwesome name="lightbulb-o" size={20} color="#FFF" />
            <Text style={styles.textItem}>Led: Encendido</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonDelete}>
          <FontAwesome name="trash" size={24} color="white" />
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
    width: '80%',
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  textItem: {
    fontSize: 14,
    color: '#FFF',
    marginLeft: 10,
  },
  buttonDelete: {
    flexDirection: 'row',
    backgroundColor: '#FF0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default DatosScreen;
