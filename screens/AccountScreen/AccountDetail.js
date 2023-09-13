import React, { useEffect, useRef, useState } from "react"; // gán lại giá trị mà không render lại đối tượng. https://www.w3schools.com/react/react_useref.asp
import { Button, Image, Text, View, Dimensions, TouchableOpacity, ScrollView, ActivityIndicator, StyleSheet } from "react-native";

// import { Ionicons } from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons/FontAwesome';
import RBSheet from "react-native-raw-bottom-sheet";  // npm i react-native-raw-bottom-sheet
import DeviceInfo from 'react-native-device-info';    // npm install --save react-native-device-info  && react-native link react-native-device-info
import DatePicker from 'react-native-date-picker'
import { Colors, DateTimePicker, Dialog } from 'react-native-ui-lib';  // npm i react-native-ui-lib // https://wix.github.io/react-native-ui-lib/docs/foundation/colors
import { useNetInfo } from "@react-native-community/netinfo";

import { BasicTable, TopTable } from "../components/Table";
import { BasicSlider } from "../components/Slider";
import ImageDefault from "../../assets/Ripple-1s-200px.gif";

Colors.loadColors({
    error: '#ff2442',
    success: '#00CD8B',
    text: '#20303C'
});

const AccountDetail = (props) => {

    useEffect(
        () => {
            console.log(props.route.params);
        }, [props]
    )

    const refRBSheet = useRef();
    const [state, setState] = useState(0.1);
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const { width, height } = Dimensions.get("screen");
    const [loadimage, setLoadimage] = useState(true);
    // DeviceInfo.getAndroidId().then((androidId) => {console.log(androidId);}); // https://www.npmjs.com/package/react-native-device-info#getandroidid
    DeviceInfo.getUniqueId().then((uniqueId) => {
        // console.log(uniqueId);
        // iOS: "FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9"
        // Android: "dd96dec43fb81c97"
        // Windows: "{2cf7cb3c-da7a-d508-0d7f-696bb51185b4}"
    });

    const netInfo = useNetInfo();
    // console.log(neetInfo);
    // console.log(width, height);
    return (
        <ScrollView>
            {/* {loadimage && <View 
            style={{width: Dimensions.get('screen').width, height: Dimensions.get('screen').height,
             opacity: 0.5, backgroundColor: 'red', position: 'absolute'}}></View>} */}
            <Image
                source={{uri: 'https://cdn.pixabay.com/photo/2022/10/20/19/31/dog-7535633_1280.jpg'}}
                style={{ 
                    width: Dimensions.get('screen').width, 
                    height: Dimensions.get('screen').height, resizeMode: 'cover' }}
                // onLoadEnd={()=>{
                //     setLoadimage(false)
                // }}
                defaultSource={ImageDefault}
            ></Image>

            <Text></Text>
            <Button title="show bottom" onPress={() => {
                refRBSheet.current.open();
            }}></Button>
            <Text>{"\n"}</Text>

            <View>
                <Text>Type: {netInfo.type}</Text>
                <Text>Is Connected?: {netInfo.isConnected ? "conneted" : "not connected"}</Text>
            </View>

            <Button title="to Wishlist" onPress={() => {
                props.navigation.navigate("Wishlist");
            }}></Button>
            <Text>{"\n"}</Text>

            <Button title="to Login" onPress={() => {
                props.navigation.navigate("Login");
            }}></Button>
            <Text>{"\n"}</Text>

            <RBSheet ref={refRBSheet}
                //  height = {height/2}    // chiều cao popup modal
                closeOnDragDown={true} // kéo xuống để ẩn popup modal
            >
                {/* <View style={{flexDirection:row, padding: 8, justifyContent: "space-between"}}></View> */}
                <ScrollView style={{ padding: 8 }}
                    horizontal={true}                      // hiển thị theo chiều ngang
                    pagingEnabled={true}                   // lật trang
                    showsHorizontalScrollIndicator={false} // ẩn thanh scollBar
                    // scrollEventThrottle={1000}          // sau 1s call: onScroll
                    onScroll={(event) => {
                        // console.log(event.nativeEvent.contentOffset);  // tọa độ x và y khi scroll
                    }}
                >
                    <View style={{ marginRight: 8 }}>
                        <TouchableOpacity onPress={() => {
                            console.log(123);
                        }}>
                            <Image source={{ uri: "https://sohanews.sohacdn.com/thumb_w/1000/160588918557773824/2023/6/20/4-1687283405506869800315.jpg" }} style={{ width: 60, height: 60, borderRadius: 30 }} resizeMode="cover"></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 8 }}>
                        <TouchableOpacity>
                            <Image source={{ uri: "https://sohanews.sohacdn.com/thumb_w/980/160588918557773824/2023/6/21/6-thi-xa-phu-my-16873146381691226222198.jpg" }} style={{ width: 60, height: 60, borderRadius: 30 }} resizeMode="cover"></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 8 }}>
                        <TouchableOpacity>
                            <Image source={{ uri: "https://sohanews.sohacdn.com/thumb_w/1000/160588918557773824/2023/6/20/photo-2-1687283382097520843048.jpg" }} style={{ width: 60, height: 60, borderRadius: 30 }} resizeMode="cover"></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 8 }}>
                        <TouchableOpacity onPress={() => {
                            console.log(123);
                        }}>
                            <Image source={{ uri: "https://sohanews.sohacdn.com/thumb_w/1000/160588918557773824/2023/6/20/4-1687283405506869800315.jpg" }} style={{ width: 60, height: 60, borderRadius: 30 }} resizeMode="cover"></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 8 }}>
                        <TouchableOpacity>
                            <Image source={{ uri: "https://sohanews.sohacdn.com/thumb_w/980/160588918557773824/2023/6/21/6-thi-xa-phu-my-16873146381691226222198.jpg" }} style={{ width: 60, height: 60, borderRadius: 30 }} resizeMode="cover"></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 8 }}>
                        <TouchableOpacity>
                            <Image source={{ uri: "https://sohanews.sohacdn.com/thumb_w/1000/160588918557773824/2023/6/20/photo-2-1687283382097520843048.jpg" }} style={{ width: 60, height: 60, borderRadius: 30 }} resizeMode="cover"></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 8 }}>
                        <TouchableOpacity onPress={() => {
                            console.log(123);
                        }}>
                            <Image source={{ uri: "https://sohanews.sohacdn.com/thumb_w/1000/160588918557773824/2023/6/20/4-1687283405506869800315.jpg" }} style={{ width: 60, height: 60, borderRadius: 30 }} resizeMode="cover"></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 8 }}>
                        <TouchableOpacity>
                            <Image source={{ uri: "https://sohanews.sohacdn.com/thumb_w/980/160588918557773824/2023/6/21/6-thi-xa-phu-my-16873146381691226222198.jpg" }} style={{ width: 60, height: 60, borderRadius: 30 }} resizeMode="cover"></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 8 }}>
                        <TouchableOpacity>
                            <Image source={{ uri: "https://sohanews.sohacdn.com/thumb_w/1000/160588918557773824/2023/6/20/photo-2-1687283382097520843048.jpg" }} style={{ width: 60, height: 60, borderRadius: 30 }} resizeMode="cover"></Image>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </RBSheet>

            {/* <Image source={require("../../assets/Ripple-1s-200px.gif")} style={{ width: 60, height: 60 }}></Image> */}

            {/* <ActivityIndicator size="small" color="#0000ff" /> */}
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <View style={{ width: 120 }}>
                    <Button title={date.toLocaleDateString() ? date.toLocaleDateString() : "select date"} onPress={() => setOpen(true)} />
                </View>
            </View>
            <DatePicker
                modal
                open={open}
                date={date}
                mode="date"
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />

            <Text style={{ color: Colors.error }}>Error Message</Text>
            <BasicSlider></BasicSlider>

            <BasicTable></BasicTable>
            <TopTable></TopTable>

        </ScrollView>
    )
}

export default AccountDetail;       