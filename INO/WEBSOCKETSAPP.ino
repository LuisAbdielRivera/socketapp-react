#include <ArduinoJson.h>
#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <WebSocketsServer.h>
#include <Adafruit_Sensor.h>
#include <DHT.h>

#define DHTPIN D5     // Pin donde está conectado el sensor
#define DHTTYPE DHT11   // Tipo de sensor utilizado (DHT11, DHT22, AM2302, etc.)

DHT dht(DHTPIN, DHTTYPE);

#define TRIGGER_PIN D2
#define ECHO_PIN D3
#define POT_PIN A0
#define LED_PIN D4
#define SECOND_LED_PIN D6 // Nuevo pin para el segundo LED

const char* ssid = "BrionesLaptop";
const char* password = "Briones2004";

IPAddress ip(192,168,137,170);
ESP8266WebServer server(80);
WebSocketsServer webSocket(81);

void webSocketEvent(uint8_t num, WStype_t type, uint8_t * payload, size_t length) {
  if (type == WStype_TEXT) {
    Serial.println("Mensaje recibido del cliente: ");
    Serial.println((char *)payload);

    // Verificar si el mensaje es "encender" o "apagar"
    if (strcmp((char *)payload, "encender") == 0) {
      digitalWrite(SECOND_LED_PIN, HIGH); // Encender el segundo LED
    } else if (strcmp((char *)payload, "apagar") == 0) {
      digitalWrite(SECOND_LED_PIN, LOW); // Apagar el segundo LED
    }
  }
}

void setup() {
  Serial.begin(9600);
  WiFi.config(ip, IPAddress(192, 168, 1, 1), IPAddress(255, 255, 255, 0));
  dht.begin();
  
  pinMode(TRIGGER_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  pinMode(POT_PIN, INPUT);
  pinMode(LED_PIN, OUTPUT);
  pinMode(SECOND_LED_PIN, OUTPUT); // Establecer el segundo LED como salida

  WiFi.begin(ssid, password);
  Serial.print("Conectando a WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.println("Conectado a la red WiFi.");

  server.begin();
  webSocket.begin();
  webSocket.onEvent(webSocketEvent);
  Serial.println("Servidor iniciado");
}

void loop() {
  webSocket.loop();
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();
  
  float distance = getDistance();

  int potValue = analogRead(POT_PIN);
  int ledBrightness = map(potValue, 0, 1023, 0, 255);
  analogWrite(LED_PIN, ledBrightness);

  // Crear el objeto JSON
  StaticJsonDocument<200> jsonDocument;
  jsonDocument["led"] = ledBrightness;
  jsonDocument["potentiometer"] = potValue;
  // Limitar la temperatura y la distancia a dos decimales
  char temperatureStr[6];
  dtostrf(temperature, 4, 2, temperatureStr);
  jsonDocument["temperature_sensor"] = temperatureStr;
  char distanceStr[6];
  dtostrf(distance, 4, 2, distanceStr);
  jsonDocument["distance_sensor"] = distanceStr;

  // Serializar el objeto JSON
  String jsonString;
  serializeJson(jsonDocument, jsonString);
  
  // Imprimir el JSON en el puerto serial
  Serial.println("JSON enviado al cliente:");
  Serial.println(jsonString);

  // Enviar el JSON al cliente a través de WebSocket
  webSocket.broadcastTXT(jsonString);

  delay(1000);
}

float getDistance() {
  digitalWrite(TRIGGER_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIGGER_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIGGER_PIN, LOW);

  float duration = pulseIn(ECHO_PIN, HIGH);
  float distance = duration * 0.034 / 2;
  
  return distance;
}
