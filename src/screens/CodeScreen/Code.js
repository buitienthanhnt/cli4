import React, { useEffect, useState } from "react";
import { Clipboard, View, Button, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Tooltip } from 'react-native-elements';
import BoxShow from "@screens/components/BoxShow";
import Loading from "@screens/components/Loading";
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Code = (props) => {
    const [fcmtoken, setFcmtoken] = useState("");
    const [loadding, setLoaddding] = useState(false);

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

    useEffect(() => {
        if (loadding) {
            setTimeout(() => {
                console.log(loadding);
                setLoaddding(false);
            }, 3000)
        }
    }, [loadding])
    return (
        <View style={{ flex: 1, padding: 5 }}>
            <Loading loading={loadding}></Loading>
            <ScrollView style={css.container} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>

                <View style={css.functionItem}>
                    <View style={{flexDirection: 'row'}}>
                    <Icon name='search' size={30} color='black' />
                    <Text> </Text>
                    <Icon name='qrcode' size={30} color='black' />
                    </View>
                    <Text style={{ fontSize: 18 }}> scan QRCode </Text>
                    <TouchableOpacity onPress={() => {
                        props?.navigation.navigate("ScanScreen");
                    }}>
                        <Icon name='arrow-circle-right' size={28} color='black' />
                    </TouchableOpacity>
                </View>

                <View style={css.functionItem}>
                    <Icon name='qrcode' size={30} color='black' />
                    <Text style={{ fontSize: 18 }}> QrGenerator </Text>
                    <TouchableOpacity onPress={() => {
                        props?.navigation.navigate("QrGenerator");
                    }}>
                        <Icon name='arrow-circle-right' size={28} color='black' />
                    </TouchableOpacity>
                </View>

                <View style={css.functionItem}>
                    <FontAwesome5Icon name='layer-group' size={28} color='black'/>
                    <Text style={{ fontSize: 18 }}> RgbaColor </Text>
                    <TouchableOpacity onPress={() => {
                        props?.navigation.navigate("RgbaColor");
                    }}>
                        <Icon name='arrow-circle-right' size={28} color='black' />
                    </TouchableOpacity>
                </View>

                <View style={css.functionItem}>
                    <FontAwesome5Icon name='icons' size={28} color='black'/>
                    <Text style={{ fontSize: 18 }}> Color&Icon </Text>
                    <TouchableOpacity onPress={() => {
                        props?.navigation.navigate('MoreScreen', {screen: "ColorIcon"});
                    }}>
                        <Icon name='arrow-circle-right' size={28} color='black' />
                    </TouchableOpacity>
                </View>

                <View style={css.functionItem}>
                    <FontAwesome5Icon name='images' size={28} color='black'/>
                    <Text style={{ fontSize: 18 }}> Slide Image </Text>
                    <TouchableOpacity onPress={() => {
                        props?.navigation.navigate("ScrollViews");
                    }}>
                        <Icon name='arrow-circle-right' size={28} color='black' />
                    </TouchableOpacity>
                </View>

                <View style={css.functionItem}>
                    <FontAwesome5Icon name='firefox-browser' size={28} color='black'/>
                    <Text style={{ fontSize: 18 }}> WebView </Text>
                    <TouchableOpacity onPress={() => {
                        props?.navigation.navigate("WebviewApp");
                    }}>
                        <Icon name='arrow-circle-right' size={28} color='black' />
                    </TouchableOpacity>
                </View>

                <View style={css.functionItem}>
                    <FontAwesome5Icon name='squarespace' size={28} color='black'/>
                    <Text style={{ fontSize: 18 }}> SwipeListViews </Text>
                    <TouchableOpacity onPress={() => {
                        props?.navigation.navigate("SwipeListViews");
                    }}>
                        <Icon name='arrow-circle-right' size={28} color='black' />
                    </TouchableOpacity>
                </View>

                <View style={css.functionItem}>
                    <FontAwesome5Icon name='photo-video' size={28} color='black'/>
                    <Text style={{ fontSize: 18 }}> Swiper Pages </Text>
                    <TouchableOpacity onPress={() => {
                        props?.navigation.navigate("SwiperComponent");
                    }}>
                        <Icon name='arrow-circle-right' size={28} color='black' />
                    </TouchableOpacity>
                </View>

                <View style={css.functionItem}>
                    <FontAwesome5Icon name='page4' size={28} color='black'/>
                    <Text style={{ fontSize: 18 }}> test Animate1 </Text>
                    <TouchableOpacity onPress={() => {
                        props?.navigation.navigate("Animate1");
                    }}>
                        <Icon name='arrow-circle-right' size={28} color='black' />
                    </TouchableOpacity>
                </View>

                <View style={css.functionItem}>
                    <FontAwesome5Icon name='hand-paper' size={28} color='black'/>
                    <Text style={{ fontSize: 18 }}> pull handle </Text>
                    <TouchableOpacity onPress={() => {
                        props?.navigation.navigate("PanResponders");
                    }}>
                        <Icon name='arrow-circle-right' size={28} color='black' />
                    </TouchableOpacity>
                </View>

                <View style={css.functionItem}>
                    <FontAwesome5Icon name='music' size={28} color='black'/>
                    <Text style={{ fontSize: 18 }}> SoundPlay </Text>
                    <TouchableOpacity onPress={() => {
                        props?.navigation.navigate("SoundPlay");
                    }}>
                        <Icon name='arrow-circle-right' size={28} color='black' />
                    </TouchableOpacity>
                </View>

                <View style={css.functionItem}>
                    <FontAwesome5Icon name='video' size={28} color='black'/>
                    <Text style={{ fontSize: 18 }}> VideoPlay </Text>
                    <TouchableOpacity onPress={() => {
                        props?.navigation.navigate("VideoPlay");
                    }}>
                        <Icon name='arrow-circle-right' size={28} color='black' />
                    </TouchableOpacity>
                </View>

                <View style={css.functionItem}>
                    <FontAwesome5Icon name='mail-bulk' size={28} color='black'/>
                    <Text style={{ fontSize: 18 }}> register notification </Text>
                    <TouchableOpacity onPress={() => {
                        props?.navigation.navigate("NotificationRegister");
                    }}>
                        <Icon name='arrow-circle-right' size={28} color='black' />
                    </TouchableOpacity>
                </View>

                <View style={css.functionItem}>
                    <FontAwesome5Icon name='car' size={28} color='black'/>
                    <Text style={{ fontSize: 18 }}> change theme </Text>
                    <TouchableOpacity onPress={() => {
                        props?.navigation.navigate("Dark");
                    }}>
                        <Icon name='arrow-circle-right' size={28} color='black' />
                    </TouchableOpacity>
                </View>

                <View style={css.functionItem}>
                    <FontAwesome5Icon name='car' size={28} color='black'/>
                    <Text style={{ fontSize: 18 }}> TabViewExample </Text>
                    <TouchableOpacity onPress={() => {
                        props?.navigation.navigate("TabViewExample");
                    }}>
                        <Icon name='arrow-circle-right' size={28} color='black' />
                    </TouchableOpacity>
                </View>

                <View style={css.functionItem}>
                    <FontAwesome5Icon name='car' size={28} color='black'/>
                    <Text style={{ fontSize: 18 }}> SwipeBtn </Text>
                    <TouchableOpacity onPress={() => {
                        props?.navigation.navigate("SwipeBtn");
                    }}>
                        <Icon name='arrow-circle-right' size={28} color='black' />
                    </TouchableOpacity>
                </View>

                <View style={css.functionItem}>
                    <FontAwesome5Icon name='car' size={28} color='black'/>
                    <Text style={{ fontSize: 18 }}> DemoUseCallBack </Text>
                    <TouchableOpacity onPress={() => {
                        props?.navigation.navigate("DemoUseCallBack");
                    }}>
                        <Icon name='arrow-circle-right' size={28} color='black' />
                    </TouchableOpacity>
                </View>

                {/* // DemoMemo */}
                <View style={css.functionItem}>
                    <FontAwesome5Icon name='car' size={28} color='black'/>
                    <Text style={{ fontSize: 18 }}> DemoMemo </Text>
                    <TouchableOpacity onPress={() => {
                        props?.navigation.navigate("DemoMemo");
                    }}>
                        <Icon name='arrow-circle-right' size={28} color='black' />
                    </TouchableOpacity>
                </View>

                {/* // DemouseReduce */}
                <View style={css.functionItem}>
                    <FontAwesome5Icon name='car' size={28} color='black'/>
                    <Text style={{ fontSize: 18 }}> DemouseReduce </Text>
                    <TouchableOpacity onPress={() => {
                        props?.navigation.navigate("DemouseReduce");
                    }}>
                        <Icon name='arrow-circle-right' size={28} color='black' />
                    </TouchableOpacity>
                </View>

                {/* // DemouseReduce */}
                <View style={css.functionItem}>
                    <FontAwesome5Icon name='car' size={28} color='black'/>
                    <Text style={{ fontSize: 18 }}> ExSvg </Text>
                    <TouchableOpacity onPress={() => {
                        props?.navigation.navigate("ExSvg");
                    }}>
                        <Icon name='arrow-circle-right' size={28} color='black' />
                    </TouchableOpacity>
                </View>

                <View style={css.btn}>
                    <Button title="open TestRedux" onPress={() => {
                        props?.navigation.navigate("TestRedux");
                    }}></Button>
                </View>

                {/* ExVirtualizedlist */}
                <View style={css.btn}>
                    <Button title="open ExVirtualizedlist" onPress={() => {
                        props?.navigation.navigate("ExVirtualizedlist");
                    }}></Button>
                </View>

                <View style={css.btn}>
                    <Button title="open FlatInScroll" onPress={() => {
                        props?.navigation.navigate("FlatInScroll");
                    }}></Button>
                </View>

                <View style={css.btn}>
                    <Button title="open ExForm" onPress={() => {
                        props?.navigation.navigate("ExForm");
                    }}></Button>
                </View>

                <View style={css.btn}>
                    <Button title="open loadding screen" onPress={() => {
                        setLoaddding(true);
                    }}></Button>
                </View>

                <Button title="to FadeInView" onPress={() => {
                    props?.navigation.navigate("FadeInView");
                }}></Button>
                <Text> {"\n"}</Text>

                {/* <ShowDemo></ShowDemo> */}

                {/* <BoxShow></BoxShow>
                <BoxShow></BoxShow>
                <BoxShow></BoxShow> */}
            </ScrollView>
        </View>

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

const css = StyleSheet.create({
    container: { flex: 1, padding: 5, backgroundColor: '#c9dd9d',},
    functionItem: {
        backgroundColor: 'rgba(25, 109, 238, 0.6)',
        marginVertical: 5,
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btn: {
        marginBottom: 10,
    },
});
export default Code;
