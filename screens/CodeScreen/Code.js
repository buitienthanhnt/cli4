import React, { useEffect, useState } from "react";
import { Clipboard, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-ui-lib";
import AsyncStorage, { AsyncStorageStatic } from "@react-native-async-storage/async-storage";
import { Tooltip } from 'react-native-elements';

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
        <View>
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
        </View>
    )
}

export default Code;