import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import BookAppointment from './screens/BookAppointment';
import Cancel from './screens/Cancel';
import Reschedule from './screens/Reschedule';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  BookAppointment: BookAppointment,
  Cancel:Cancel, 
  Reschedule:Reschedule
});

const AppContainer = createAppContainer(AppNavigator);
