import React, { useEffect, useState } from "react";
import { Clipboard, View, Button, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Tooltip } from 'react-native-elements';
import BoxShow from "../components/BoxShow";
import Loading from "../components/Loading";
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Config from "../../config/Config";
import { anyAxios } from "../../src/hooks/NetWorking";
import DeviceInfo from 'react-native-device-info';    // npm install --save react-native-device-info  && react-native link react-native-device-info

const NotificationRegister = () => {
    const [fcmtoken, setFcmtoken] = useState("");
    const [deviceId, setDeviceid] = useState("");

    const getFcmtoken = async () => {
        const token = await AsyncStorage.getItem("fcmToken")
        if (token) {
            setFcmtoken(token);
        }
        return token;
    }

    const registerNotification = async () => {
        const token = await AsyncStorage.getItem("fcmToken");
        if (token) {
            let url = Config.custom_url() + Config.api_request.registerFcm;
            const response = await anyAxios(url, {
                fcmToken: token,
                deviceId: deviceId,
                active: true
            }, "POST");
            console.log(response);
        }
    }

    const implementDevice = async () => {
        let uniqueId = await DeviceInfo.getUniqueId().then((uniqueId) => {
            console.log(uniqueId);
            return uniqueId;
            // iOS: "FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9"
            // Android: "dd96dec43fb81c97"
            // Windows: "{2cf7cb3c-da7a-d508-0d7f-696bb51185b4}"
        });
        // console.log();
        setDeviceid(uniqueId);
    }

    const copyToClipboard = (text) => {
        Clipboard.setString(text);
    };

    useEffect(() => {
        const tk = getFcmtoken();
        implementDevice();
        // console.log(tk);
    }, [])

    return (
        <ScrollView style={{ padding: 6, backgroundColor: 'rgba(0, 114, 0, 0.5)' }}>
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
                <Text style={{ color: '#dd5fc0' }}><Icon name='copy' size={18} color='tomato' /> {fcmtoken}</Text>
            </Tooltip>
            <View>
                <Text>deviceId: {DeviceInfo.getDeviceId()}</Text>
                <Text>uniqueId(check fcmToken in server): {deviceId}</Text>
            </View>

            <TouchableOpacity style={{ alignItems: 'center', backgroundColor: 'rgba(53, 102, 142, 0.4)', borderRadius: 6, padding: 6, }} onPress={registerNotification}>
                <Icon name='plane' size={36} color='black' />  
                <Text>recived notification for device</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default NotificationRegister;