import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { insertSensor } from "../api";

const HomeScreen = ({ navigation }) => {
  const windowWidth = useWindowDimensions().width;

  const [cardData, setCardData] = useState({});
  const [isOn, setIsOn] = useState(false);
  const [webSocket, setWebSocket] = useState(null); // Almacena el WebSocket en un estado

  const toggleSwitch = () => {
    setIsOn(!isOn);
    const message = isOn ? "apagar" : "encender"; // Cambia el mensaje según el estado actual
    console.log(message);
    // Verificar que el WebSocket esté inicializado antes de enviar el mensaje
    if (webSocket) {
      webSocket.send(message);
    }
  };

  const [temperature, setTemperature] = useState(null);
  const [distance, setDistance] = useState(null);
  const [potentiometer, setPotenciometer] = useState(null);
  const [light, setLight] = useState(null);

  const saveData = () => {
    const dataToSave = {
      temperature_sensor: temperature,
      distance_sensor: distance,
      potentiometer: light,
      led: light,
    };

    insertSensor(dataToSave)
      .then((response) => {
        console.log("Datos guardados en la API:", response);
      })
      .catch((error) => {
        console.error("Error al guardar datos en la API:", error);
      });
  };

  useEffect(() => {
    const webSocket = new WebSocket("ws://192.168.137.145:81");
    setWebSocket(webSocket); // Guardar el WebSocket en el estado

    webSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setTemperature(data.temperature_sensor);
      setDistance(data.distance_sensor);
      setPotenciometer(data.potentiometer);
      setLight(data.led);
    };

    return () => {
      webSocket.close();
    };
  }, []);

  const cards = [
    { icon: "thermometer", title: "Temperatura", value: temperature },
    { icon: "arrows-h", title: "Distancia", value: distance },
    { icon: "sliders", title: "Potenciómetro", value: potentiometer },
    { icon: "lightbulb-o", title: "Luz", value: light },
  ];

  const cardWidth = windowWidth > 600 ? "30%" : "48%";
  const marginBetweenCards = windowWidth > 600 ? "5%" : "2%";

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.row}>
            {cards.map((card, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.card,
                  {
                    width: cardWidth,
                    marginRight: index % 2 === 0 ? marginBetweenCards : 0,
                  },
                ]}
                onPress={() => {}}
              >
                <FontAwesome
                  style={styles.icon}
                  name={card.icon}
                  size={50}
                  color="white"
                />
                <Text style={styles.textoPorcentaje}>{card.value}</Text>
                <Text style={styles.textoEspecificacion}>{card.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.innerContainer}>
          <View style={styles.buttonContainer}>
            <FontAwesome
              name="lightbulb-o"
              size={24}
              color="white"
              style={{ marginRight: 10 }}
            />
            <TouchableOpacity
              style={[
                styles.switchButton,
                isOn ? styles.switchOn : styles.switchOff,
              ]}
              onPress={toggleSwitch}
            >
              <Text style={styles.switchText}>
                {isOn ? "Encender" : "Apagar"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.iconButton} onPress={saveData}>
            <FontAwesome name="save" size={24} color="white" />
            <Text style={styles.iconButtonText}>Guardar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate("Datos")}
          >
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1C1A19",
    paddingVertical: 20,
  },
  innerContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "80%",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  icon: {
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#303030",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
    height: 200,
    marginBottom: "5%",
  },
  textoPorcentaje: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 15,
  },
  textoEspecificacion: {
    fontSize: 14,
    color: "#FFF",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  switchButton: {
    borderRadius: 20,
    width: 100,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    backgroundColor: "#FF0000",
    borderColor: "#FF0000",
    marginRight: 10,
  },
  switchOn: {
    backgroundColor: "#00913f",
    borderColor: "#00913f",
  },
  switchOff: {
    backgroundColor: "#FF0000",
    borderColor: "#FF0000",
  },
  switchText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007bff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginLeft: 10,
  },
  iconButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#303030",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  modalText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 15,
  },
  closeButton: {
    backgroundColor: "#FF0000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  closeButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default HomeScreen;
