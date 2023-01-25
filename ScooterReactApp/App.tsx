/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { SetStateAction } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';

import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Scooter } from './Model/Scooter';

interface EditTextFieldProps {
  onSearch: React.Dispatch<React.SetStateAction<string>>
  TextPrompt: string
  Text: string
}

interface LogButtonProps {
  Title:string
  LogFunc: Function
}
const EditTextField = (Props : EditTextFieldProps) => {
  return(
      <TextInput className='bg-slate-200 mx-20 mb-2 rounded-md border-spacing-0 border-dashed border-2 border-purple-900'
      onChangeText={Props.onSearch}
      placeholder={Props.TextPrompt}
      value={Props.Text}
      />
  );
}

const LogButton = (Props:LogButtonProps) => {
  return(
    <Pressable onPress={Props.LogFunc} className='bg-purple-700 rounded-sm w-32 h-8 self-center ml-28 border-2 border-purple-900'>
      <Text className='self-center my-1 border-1 text-white'>{Props.Title}</Text>
    </Pressable>
  )
}


function App() {
  const [ScooterID, ScooterIDSetter] = React.useState('');
  const [Location, LocationSetter] = React.useState('');

  function LogScooter() {
    if (ScooterID !== "" && Location !== "") {
      let scoot = new Scooter(ScooterID, Location)
      console.log(scoot.ToString())
      ScooterIDSetter("");
      LocationSetter("");
    } else { console.log("LMAO"); }
  }

  return (
    <SafeAreaView className='py-200 pt-56 pb-96 bg-yellow-300 fill'>
      <EditTextField TextPrompt={"Enter ScooterID"} onSearch={ScooterIDSetter} Text={ScooterID} />
      <EditTextField TextPrompt={"Enter Location"} onSearch={LocationSetter} Text={Location} />
      <LogButton Title={"Log Me!"} LogFunc={LogScooter} />
    </SafeAreaView>
  );
}

export default App;
