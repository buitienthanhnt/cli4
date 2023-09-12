import react, { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, RefreshControl, Text, View, FlatList, ActivityIndicator, StyleSheet, Button } from "react-native";
import WebView from 'react-native-webview'; 
import {Linking} from 'react-native';

const WebviewApp = ()=>{
    return(
        <WebView source={{ uri: "https://magento24x.jmango360.dev/" }}
                // onNavigationStateChange={event => {
                //     console.log("=====>", event);
                //     if (event.url !== uri) {
                //     Linking.openURL(event.url);
                //     }
                // }}

                onShouldStartLoadWithRequest={(request) => { // gọi khi nhấn vào 1 link trong webview
                    console.log('====<<<', request);
                    if(request.url !== "about:blank") {
                        console.log(request.url);
                        Linking.openURL(`myapp://app/PaperDetail/12`);
                        //   Linking.openURL(request.url)
                      return false
                    } else return true
                }}
         />
    );
}

export default WebviewApp;