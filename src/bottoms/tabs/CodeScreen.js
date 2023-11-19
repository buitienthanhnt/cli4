import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Code                 from "@screens/CodeScreen/Code";
import Dark                 from "@screens/CodeScreen/Dark";
import Animate1             from "@screens/CodeScreen/Animate1";
import TestRedux            from "@screens/CodeScreen/TestRedux";
import RgbaColor            from "@screens/components/RgbaColor";
import SoundPlay            from "@screens/CodeScreen/SoundPlay";
import VideoPlay            from "@screens/CodeScreen/VideoPlay";
import ScanScreen           from "@screens/CodeScreen/ScanScreen";
import WebviewApp           from "@screens/components/WebviewApp";
import FadeInView           from "@screens/CodeScreen/FadeInView";
import ScrollViews          from "@screens/CodeScreen/ScrollViews";
import QrGenerator          from "@screens/CodeScreen/QrGenerator";
import PanResponders        from "@screens/CodeScreen/PanResponders";
import NotificationRegister from "@screens/CodeScreen/NotificationRegister";
import SwipeBtn             from "@screens/CodeScreen/SwipeBtn";
import TabViewExample       from "@screens/CodeScreen/TabViewExample";
import DemoUseCallBack      from "@screens/CodeScreen/components/test/DemoUseCallBack";
import DemoMemo      from "@screens/CodeScreen/components/test/DemoMemo";
import DemouseReduce      from "@screens/CodeScreen/components/test/DemouseReduce";

const Stack = createNativeStackNavigator();
const CodeScreen = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Code" component={Code} options={{ headerShown: false }} />
            <Stack.Screen name="PanResponders" component={PanResponders} options={{ headerShown: false }} />
            <Stack.Screen name="FadeInView" component={FadeInView} options={{ headerShown: false }} />
            <Stack.Screen name="ScrollViews" component={ScrollViews} options={{ headerShown: false }} />
            <Stack.Screen name="Animate1" component={Animate1} options={{ headerShown: false }} />
            <Stack.Screen name="RgbaColor" component={RgbaColor} options={{ headerShown: true }} />
            <Stack.Screen name="ScanScreen" component={ScanScreen} options={{ headerShown: true }} />
            <Stack.Screen name="WebviewApp" component={WebviewApp} options={{ headerShown: true }} />
            <Stack.Screen name="QrGenerator" component={QrGenerator} options={{ headerShown: true }} />
            <Stack.Screen name="SoundPlay" component={SoundPlay} options={{ headerShown: true }} />
            <Stack.Screen name="VideoPlay" component={VideoPlay} options={{ headerShown: true }} />
            <Stack.Screen name="Dark" component={Dark} options={{ headerShown: true }} />
            <Stack.Screen name="TestRedux" component={TestRedux} options={{ headerShown: true }} />
            <Stack.Screen name="NotificationRegister" component={NotificationRegister} options={{ headerShown: true }} />
            <Stack.Screen name="SwipeBtn" component={SwipeBtn} options={{ headerShown: true }} />
            <Stack.Screen name="TabViewExample" component={TabViewExample} options={{ headerShown: false }} />
            <Stack.Screen name="DemoUseCallBack" component={DemoUseCallBack} options={{ headerShown: true }} />
            <Stack.Screen name="DemoMemo" component={DemoMemo} options={{ headerShown: true }} />
            <Stack.Screen name="DemouseReduce" component={DemouseReduce} options={{ headerShown: true }} />
        </Stack.Navigator>
    );
}

export default CodeScreen;
