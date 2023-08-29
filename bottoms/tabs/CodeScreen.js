import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Code from "../../screens/CodeScreen/Code";
import PanResponders from "../../screens/CodeScreen/PanResponders";
import FadeInView from "../../screens/CodeScreen/FadeInView";
import ScrollViews from "../../screens/CodeScreen/ScrollViews";

const Stack = createNativeStackNavigator();
const CodeScreen = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Code" component={Code} options={{ headerShown: false }} />
            <Stack.Screen name="PanResponders" component={PanResponders} options={{ headerShown: false }} />
            <Stack.Screen name="FadeInView" component={FadeInView} options={{ headerShown: false }} />
            <Stack.Screen name="ScrollViews" component={ScrollViews} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default CodeScreen;