import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import Posts from './component/posts';

const HomeScreen = ({navigation}) => {
  const tailwind = useTailwind();

  return (
    <SafeAreaView>
      <View style={tailwind('px-4 pt-2 pb-4')}>
        <Text style={tailwind('text-black font-semibold text-xl')}>Posts</Text>
      </View>
      <View style={tailwind('h-full bg-gray-100')}>
        <Posts navigate={navigation.navigate} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
