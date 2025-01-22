import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {Alert, Button, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button1}>
        <Text style={{ color: 'red', fontSize: 20 }}>Emergency</Text>
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <Image
          source={require('./assets/mbewell_logo-2.png')}
          style={styles.logoImage}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: 'white', fontSize: 20 }}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: 'white', fontSize: 20 }}>Resources</Text>
          </TouchableOpacity>
          <Button
            onPress={this._onPressButton}
            title="Welcome"
            onPress={() =>
              navigation.navigate('Homepage')}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  button1: {
    position: 'absolute',
    top: 60,
    right: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFDE59',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 300,
    height: 350,
  },
  buttonContainer: {
    marginTop: 50, // Adjust this value to increase or decrease the space
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#071D3B',
    marginBottom: 10,
  },
});
