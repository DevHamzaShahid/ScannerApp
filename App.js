import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Help from './app/screens/help';
import Home from './app/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Component } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Verify from './app/screens/Verify';
const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }

  render() {
    return (
      <NavigationContainer >
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }} >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Help" component={Help} />
          <Stack.Screen name="Verify" component={Verify} />

        </Stack.Navigator>
      </NavigationContainer>

    );
  }
}



