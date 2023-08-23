import react, { useEffect } from "react";
import { Text, View, Image } from "react-native";
import WebView from "react-native-webview";

const WebInApp = (props: any) => {
    useEffect(() => {
    }, []);
    return (
        <View style={{flex: 1}}>
            {
                props?.route?.params?.storeUrl ? (
                    <WebView // open webview in app by url
                        source={{ uri: `https://${props?.route?.params?.storeUrl}` }}
                        renderLoading={() => {
                            return (
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '100%',
                                        height: '100%',
                                        // position: 'absolute',
                                    }}>
                                    <Text>22222</Text>
                                </View>
                            );
                        }}
                    />
                ) : (
                    <View>
                        <Image source={require('../../assets/pexels-brakou-abdelghani-1723637.jpg')} style={{width: '100%', height: '100%'}}></Image>
                    </View>
                )
            }
        </View>
    )
}

export default WebInApp;