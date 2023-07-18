/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';  // npm install react-native-vector-icons --save && thêm: apply from: "../../node_modules/react-native-vector-icons/fonts.gradle" vào: android/app/build.gradle

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from './bottoms/Bottom';
const Stack = createNativeStackNavigator();

// import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import Icon from 'react-native-vector-icons/Ionicons';
import { requestUserPermission } from './src/utils/notificationHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';




type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {

  const [token, setToken] = useState("");

  useEffect(()=>{
    requestUserPermission();
    getFcmToken();
  }, []);

  const getFcmToken = async ()=>{
    const token = await AsyncStorage.getItem("fcmToken");
    console.log("token in app: ", token);
    if (token) {
      setToken(token);
    }
  };
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
      <StatusBar backgroundColor="#61dafb" animated={true} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
