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
  Button,
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


interface IEditTextField {
  onSearch: React.Dispatch<React.SetStateAction<string>>
  TextPrompt: string
  Text: string
}

interface ILogButton {
  Title:string
  LogFunc: Function
}
const EditTextField = (Props : IEditTextField) => {
  return(
      <TextInput className='bg-slate-300 mx-20 mb-2'
      onChangeText={Props.onSearch}
      placeholder={Props.TextPrompt}
      value={Props.Text}
      />
  );
}

const LogButton = (Props:ILogButton) => {
  return(
    <Button 
    title = {Props.Title}
    onPress = {Props.LogFunc}/>
  )
}


const App: JSX.Element = () => {
  const [ScooterID, ScooterIDSetter] = React.useState('');
  const [Location, LocationSetter] = React.useState('');

  function LogScooter() {
    if (ScooterID !== "" && Location !== "") {
      console.log('ScooterID : ' + ScooterID.toString() + ' Location'+ Location.toString())
      ScooterIDSetter("")
      LocationSetter("")
    } else {console.log("LMAO")}
  }
  return (
    <SafeAreaView className='py-200 pt-52'>
    <EditTextField  TextPrompt={"Enter ScooterID"} onSearch={ScooterIDSetter} Text={ScooterID}/>
    <EditTextField TextPrompt={"Enter Location"} onSearch={LocationSetter} Text={Location}/>
    <LogButton className='bg-black mx-3'  Title={"Log Me!"} LogFunc={LogScooter}/>
    </SafeAreaView>
  );
}

export default App;
