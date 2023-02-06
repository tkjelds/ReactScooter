import {View, Text, Pressable, TextInput} from 'react-native';
import React from 'react';
import Snackbar from 'react-native-snackbar';
import {Scooter} from '../../Model/Scooter';

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

function showScooterSnackBar(scooter: Scooter): void {
  Snackbar.show({
    text: scooter.ToString(),
    duration: Snackbar.LENGTH_SHORT,
  });
}

export function StartRideScreen() {
  const [ScooterID, ScooterIDSetter] = React.useState('');
  const [Location, LocationSetter] = React.useState('');
  return (
    <View className="align-bottom justify-center bg-yellow-300">
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
        //LogFunc={() => navigation.navigate('TestNavigationScreen')}
        LogFunc={() => showScooterSnackBar(new Scooter(ScooterID, Location))}
      />
    </View>
  );
}
