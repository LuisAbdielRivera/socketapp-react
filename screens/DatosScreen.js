import { deleteSensors, getSensors } from "../api";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const DatosScreen = () => {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    getSensors()
      .then((response) => {
        console.log(response);
        setSensorData(response);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, []);

  const deleteData = (_id) => {
    deleteSensors(_id)
      .then((response) => {
        console.log("Datos eliminados en la API:", response);
        // Actualizar sensorData después de la eliminación
        getSensors()
          .then((updatedResponse) => {
            setSensorData(updatedResponse);
          })
          .catch((error) => {
            console.error("Error al obtener datos actualizados:", error);
          });
      })
      .catch((error) => {
        console.error("Error al eliminar datos en la API:", error);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        {sensorData &&
          sensorData.map((sensor, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.cardBody}>
                <View style={styles.row}>
                  <FontAwesome name="thermometer" size={20} color="#FFF" />
                  <Text style={styles.textItem}>
                    Temperatura: {sensor.temperature_sensor}
                  </Text>
                </View>
                <View style={styles.row}>
                  <FontAwesome name="sliders" size={20} color="#FFF" />
                  <Text style={styles.textItem}>
                    Potenciómetro: {sensor.potentiometer}
                  </Text>
                </View>
                <View style={styles.row}>
                  <FontAwesome name="arrows-h" size={20} color="#FFF" />
                  <Text style={styles.textItem}>
                    Distancia: {sensor.distance_sensor}
                  </Text>
                </View>
                <View style={styles.row}>
                  <FontAwesome name="lightbulb-o" size={20} color="#FFF" />
                  <Text style={styles.textItem}>
                    Led: {sensor.led ? "Encendido" : "Apagado"}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.buttonDelete}
                onPress={() => deleteData(sensor._id)} // Pasar el _id del sensor al eliminar
              >
                <FontAwesome name="trash" size={24} color="white" />
                <Text style={styles.buttonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1C1A19",
    paddingVertical: 20,
  },
  container: {
    width: "100%",
    alignItems: "center",
  },
  card: {
    width: "80%",
    backgroundColor: "#303030",
    borderRadius: 10,
    marginBottom: "5%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  cardBody: {
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  textItem: {
    fontSize: 14,
    color: "#FFF",
    marginLeft: 10,
  },
  buttonDelete: {
    flexDirection: "row",
    backgroundColor: "#FF0000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default DatosScreen;
