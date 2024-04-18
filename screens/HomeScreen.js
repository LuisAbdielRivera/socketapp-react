import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Modal, useWindowDimensions } from 'react-native';
import JSON from './JSON';

const HomeScreen = () => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const [modalVisible, setModalVisible] = useState(false);
  const [cardData, setCardData] = useState({});

  const openModal = (data) => {
    setCardData(data);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const cards = [
    { title: 'Temperatura', percentage: '100%' },
    { title: 'Distancia', percentage: '60%' },
    { title: 'Potenciómetro', percentage: '90%' },
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
              <Button title="Cerrar" onPress={closeModal} />
            </View>
          </View>
        </Modal>
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
  botonesContainer: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'column',
  },
  boton: {
    width: '100%',
    marginBottom: 10,
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
});

export default HomeScreen;
