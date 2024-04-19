import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, useWindowDimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import DatosScreen from './DatosScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = ({ navigation }) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const [modalVisible, setModalVisible] = useState(false);
  const [cardData, setCardData] = useState({});
  const [isOn, setIsOn] = useState(false);

  const openModal = (data) => {
    setCardData(data);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const cards = [
    { icon: 'thermometer', title: 'Temperatura', percentage: '100%' },
    { icon: 'arrows-h', title: 'Distancia', percentage: '60%' },
    { icon: 'sliders', title: 'Potenciómetro', percentage: '90%' }
  ];

  const cardWidth = windowWidth > 600 ? '30%' : '48%';
  const marginBetweenCards = windowWidth > 600 ? '5%' : '2%';

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.row}>
            {cards.map((card, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.card, { width: cardWidth, marginRight: index % 2 === 0 ? marginBetweenCards : 0 }]}
                onPress={() => openModal(card)}
              >
                <FontAwesome style={styles.icon} name={card.icon} size={50} color="white" />
                <Text style={styles.textoPorcentaje}>{card.percentage}</Text>
                <Text style={styles.textoEspecificacion}>{card.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>{cardData.title}</Text>
              <Text style={styles.modalText}>{cardData.percentage}</Text>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        
        <View style={styles.buttonContainer}>
        <FontAwesome name="lightbulb-o" size={24} color="white" style={{ marginRight: 10 }} />
        <TouchableOpacity
            style={[styles.switchButton, isOn ? styles.switchOn : styles.switchOff]}
            onPress={toggleSwitch}
          >
            <Text style={styles.switchText}>{isOn ? 'ON' : 'OFF'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.iconButton} onPress={() => {}}>
            <FontAwesome name="save" size={24} color="white" />
            <Text style={styles.iconButtonText}>Guardar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Datos')}>
            <FontAwesome name="file-text" size={24} color="white" />
            <Text style={styles.iconButtonText}>Ver JSON</Text>
          </TouchableOpacity>
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
    paddingVertical: 20,
  },
  innerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '80%',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  icon:{
    marginBottom: 5
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
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
    height: 200,
    marginBottom: '5%',
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
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  switchButton: {
    borderRadius: 20,
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    backgroundColor: '#FF0000',
    borderColor: '#FF0000',
    marginRight: 10,
  },
  switchOn: {
    backgroundColor: '#00913f',
    borderColor: '#00913f',
  },
  switchOff: {
    backgroundColor: '#FF0000',
    borderColor: '#FF0000',
  },
  switchText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginLeft: 10,
  },
  iconButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
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
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 15,
  },
  closeButton: {
    backgroundColor: '#FF0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  closeButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default HomeScreen;