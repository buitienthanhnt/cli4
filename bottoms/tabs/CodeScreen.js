import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Code from "../../screens/CodeScreen/Code";

const Stack = createNativeStackNavigator();
const CodeScreen = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Code" component={Code} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default CodeScreen;