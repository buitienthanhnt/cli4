import React from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient'; // npm i react-native-linear-gradient
import { useNavigation } from '@react-navigation/native';
export default function Animate1() {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.box, width }} />
      <Button onPress={handlePress} title="Click me" />
      <Rediredct></Rediredct>
    </View>
  );
}

const Rediredct = () => {
  const navigation = useNavigation();
  const changeScr = ()=>{
    navigation.navigate("Home");
  }
  return (
    <View>
      <TouchableOpacity onPress={changeScr}>
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
          <Text style={styles.buttonText}>
            Sign in with Facebook
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  box: {
    height: 60,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 64,
  },
  linearGradient: {
    height: 120,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
