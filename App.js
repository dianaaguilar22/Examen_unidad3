
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
 <vie><text>App Sensor Camera</text></vie>

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) 

  if (!permission.granted) 

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={imagengaleria} style={styles.button}>
        <Text style={styles.buttonText}>Seleccionar foto</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={tomarfoto} style={styles.button}>
        <Text style={styles.buttonText}>Tomar Foto</Text> 
      </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  sinfoto: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEE',
    width: '80%',
    height: '80%',
    borderRadius: 10,
  },
  fotoperfil: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
  },
});

