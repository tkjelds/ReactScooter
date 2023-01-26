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
import {Scooter} from './Model/Scooter';

interface EditTextFieldProps {
  onSearch: React.Dispatch<React.SetStateAction<string>>;
  TextPrompt: string;
  Text: string;
}

interface LogButtonProps {
  Title: string;
  LogFunc: (event: GestureResponderEvent) => void;
}
const EditTextField = (Props: EditTextFieldProps) => {
  return (
    <TextInput
      className="bg-slate-200 mx-20 mb-2 rounded-md border-spacing-0 border-2 border-purple-900"
      onChangeText={Props.onSearch}
      placeholder={Props.TextPrompt}
      placeholderTextColor={'#000'}
      value={Props.Text}
    />
  );
};

const LogButton = (Props: LogButtonProps) => {
  return (
    <Pressable
      onPress={Props.LogFunc}
      className="bg-purple-700 rounded-sm w-32 h-8 self-center ml-28 border-2 border-purple-900 border-double">
      <Text className="self-center my-1 border-1 text-white shadow-black shadow-xl">
        {Props.Title}
      </Text>
    </Pressable>
  );
};

function App() {
  const [ScooterID, ScooterIDSetter] = React.useState('');
  const [Location, LocationSetter] = React.useState('');

  function LogScooter() {
    if (ScooterID !== '' && Location !== '') {
      let scoot = new Scooter(ScooterID, Location);
      console.log(scoot.ToString());
      ScooterIDSetter('');
      LocationSetter('');
    } else {
      console.log('LMAO');
    }
  }

  return (
    <View className="h-screen w-screen bg-yellow-300 flex justify-center align-middle">
      <SafeAreaView className="bg-yellow-300 fill">
        <EditTextField
          TextPrompt={'Enter ScooterID'}
          onSearch={ScooterIDSetter}
          Text={ScooterID}
        />
        <EditTextField
          TextPrompt={'Enter Location'}
          onSearch={LocationSetter}
          Text={Location}
        />
        <LogButton Title={'Log Me!'} LogFunc={LogScooter} />
      </SafeAreaView>
    </View>
  );
}

export default App;
