import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import AppHeader from '../components/AppHeader';

const appIcon = require("../assets/doctor_hospital.png");
export default class HomeScreen extends React.Component {
 
  render() {
    return (
      <View>
        <AppHeader />

      <Image source={appIcon} style={styles.imageIcon} />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={() => {
            this.props.navigation.navigate('BookAppointment');
          }}>
          <Text style={styles.buttonText}>Book Appointment</Text>
        </TouchableOpacity>

      

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => {
            this.props.navigation.navigate('Reschedule');
          }}>
          <Text style={styles.buttonText}>Reschedule </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={() => {
            this.props.navigation.navigate('Cancel');
          }}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
  },

imageIcon:{
  marginLeft:40,
  marginTop:30
},

  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
