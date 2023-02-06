import React, {useEffect} from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import {Props} from '../../App';

interface NavigationButtonProps {
  Text: string;
  NavigationFunc: () => void;
}

function NavigationButton(navigationButtonProps: NavigationButtonProps) {
  return (
    <View className="align-middle">
      <Pressable
        onPressIn={navigationButtonProps.NavigationFunc}
        className="bg-purple-700 rounded-sm w-32 h-8 self-center ml-28 border-2 border-purple-900 border-double">
        <Text className="self-center my-1 border-1 text-white shadow-black shadow-xl">
          {navigationButtonProps.Text}
        </Text>
      </Pressable>
    </View>
  );
}
export function LogInScreen({navigation}: Props) {
  useEffect(() => {}, []);
  return (
    <View className="h-screen w-screen bg-yellow-300 flex justify-center align-middle">
      <SafeAreaView className="bg-yellow-300 align-middle">
        <NavigationButton
          NavigationFunc={() => navigation.navigate('StartRideScreen')}
          Text={'Start Ride'}
        />
        <View className="h-8" />
        <NavigationButton
          NavigationFunc={() => navigation.navigate('UpdateRideScreen')}
          Text={'Update Ride'}
        />
      </SafeAreaView>
    </View>
  );
}
