import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

const HomeScreen = () => {
    return (
        <View style={styles.outerContainer}>
          <Text style={styles.banner}>iHome</Text>
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
            <View style={styles.row}>
              <View style={styles.card}>
                <View style={styles.disenoPorcentaje}>
                  <Text style={styles.textoPorcentaje}>90%</Text>
                </View>
                <Text style={styles.textoEspecificacion}>Potenciómetro</Text>
              </View>
              <View style={styles.card}>
                <View style={styles.disenoPorcentaje}>
                  <Text style={styles.textoPorcentaje}>On</Text>
                </View>
              </View>
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
        paddingVertical: 20,
      },
      innerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '80%',
      },
      banner: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
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
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#FFF',
      },
    });

export default HomeScreen