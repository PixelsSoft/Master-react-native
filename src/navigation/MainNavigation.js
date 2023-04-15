import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '../constants';

import DrawerNavigator from './Drawer/index';


const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};



export default function ( props ) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={screenOptions}
          initialRouteName={SCREENS.Splash}
        >
          <Stack.Screen
            name={SCREENS.Splash}
            component={DrawerNavigator}
          />
          <Stack.Screen
            name={SCREENS.DrawerNavigator}
            component={DrawerNavigator}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create( {} );
