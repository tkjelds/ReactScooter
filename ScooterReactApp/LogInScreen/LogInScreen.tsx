import React, {useEffect} from 'react';
import {Pressable, SafeAreaView, Text, TextInput, View} from 'react-native';
import {Props} from '../App';

interface EditTextFieldProps {
  onSearch: React.Dispatch<React.SetStateAction<string>>;
  TextPrompt: string;
  Text: string;
}

interface LogButtonProps {
  Title: string;
  LogFunc: () => void;
}

const EditTextField = (EditTextFieldProps: EditTextFieldProps) => {
  return (
    <TextInput
      className="bg-slate-200 mx-20 mb-2 rounded-md border-spacing-0 border-2 border-purple-900"
      onChangeText={EditTextFieldProps.onSearch}
      placeholder={EditTextFieldProps.TextPrompt}
      placeholderTextColor={'#000'}
      value={EditTextFieldProps.Text}
    />
  );
};

const LogButton = (LogButtonProps: LogButtonProps) => {
  return (
    <Pressable
      onPressIn={LogButtonProps.LogFunc}
      className="bg-purple-700 rounded-sm w-32 h-8 self-center ml-28 border-2 border-purple-900 border-double">
      <Text className="self-center my-1 border-1 text-white shadow-black shadow-xl">
        {LogButtonProps.Title}
      </Text>
    </Pressable>
  );
};

export function LogInScreen({navigation}: Props) {
  useEffect(() => {}, []);
  const [ScooterID, ScooterIDSetter] = React.useState('');
  const [Location, LocationSetter] = React.useState('');

  //   function LogScooter() {
  //     if (ScooterID !== '' && Location !== '') {
  //       let scoot = new Scooter(ScooterID, Location);
  //       console.log(scoot.ToString());
  //       ScooterIDSetter('');
  //       LocationSetter('');
  //     } else {
  //       console.log('LMAO');
  //     }
  //   }
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
        <LogButton
          Title={'Log Me!'}
          LogFunc={() => navigation.navigate('TestNavigationScreen')}
        />
      </SafeAreaView>
    </View>
  );
}
