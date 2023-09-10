import React, { useEffect, useState } from "react";
import { Clipboard, View, Button, Text, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Tooltip } from 'react-native-elements';
import BoxShow from "../components/BoxShow";

const Code = (props) => {
    const [fcmtoken, setFcmtoken] = useState("");

    const getFcmtoken = async () => {
        const token = await AsyncStorage.getItem("fcmToken")
        if (token) {
            setFcmtoken(token);
        }
        return token;
    }

    const copyToClipboard = (text) => {
        Clipboard.setString(text);
    };

    useEffect(() => {
        const tk = getFcmtoken();
        // console.log(tk);
    }, [])
    return (
        <ScrollView style={{flex: 1, padding: 5}}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>fcmToken: </Text>
                <Text>(click to coppy)</Text>
            </View>

            <Tooltip popover={<Text>coppied to Clipboard: </Text>}
                withOverlay={false}
                skipAndroidStatusBar={true}
                onOpen={() => {
                    copyToClipboard(`${fcmtoken}`);
                }}
            >
                <Text>{fcmtoken}</Text>
            </Tooltip>

            <View style={{ marginVertical: 8, height: 1, backgroundColor: "black" }}></View>

            <Button title="to FadeInView" onPress={() => {
                props?.navigation.navigate("FadeInView");
            }}></Button>
            <Text> {"\n"}</Text>

            <Button title="to PanResponders" onPress={() => {
                props?.navigation.navigate("PanResponders");
            }}></Button>
            <Text> {"\n"}</Text>

            <Button title="to Animate1" onPress={() => {
                props?.navigation.navigate("Animate1");
            }}></Button>
            <Text> {"\n"}</Text>

            <Button title="to RgbaColor" onPress={() => {
                props?.navigation.navigate("RgbaColor");
            }}></Button>
            <Text> {"\n"}</Text>

            <Button title="to ScanScreen" onPress={() => {
                props?.navigation.navigate("ScanScreen");
            }}></Button>
            <Text> {"\n"}</Text>

            <Button title="to ScrollViews" onPress={() => {
                props?.navigation.navigate("ScrollViews");
            }}></Button>

            <ShowDemo></ShowDemo>
            <BoxShow></BoxShow>
            <BoxShow></BoxShow>
            <BoxShow></BoxShow>
        </ScrollView>
    )
}

const ShowDemo = () => {
    return (
        <View style={{
            width: 320,
            height: 120,
            backgroundColor: 'white',
            left: 60,
            shadowColor: 'red',
            padding: 10,
            elevation: 20,
        }}>
            <Text>
                poipoipoi
            </Text>
        </View>
    );
}
export default Code;
