/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type {PropsWithChildren} from 'react';
import React, {SetStateAction} from 'react';
import {
  GestureResponderEvent,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Scooter} from './Model/Scooter';
import {LogInScreen} from './Pages/LogInScreen/LogInScreen';
import {UpdateRideScreen} from './Pages/UpdateRide/UpdateRide';
import {StartRideScreen} from './Pages/StartRide/StartRide';
type RootStackParamList = {
  LogInScreen: undefined;
  TestNavigationScreen: undefined;
  UpdateRideScreen: undefined;
  StartRideScreen: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList>;

function TestNavigationScreen() {
  return (
    <View className="align-bottom justify-center bg-yellow-300">
      <Text className="text-center text-xl text-purple-900">
        {'Test test test'}
      </Text>
    </View>
  );
}

function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogInScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen
          name="TestNavigationScreen"
          component={TestNavigationScreen}
        />
        <Stack.Screen name="UpdateRideScreen" component={UpdateRideScreen} />
        <Stack.Screen name="StartRideScreen" component={StartRideScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
