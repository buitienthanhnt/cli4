import react, { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, RefreshControl, Text, View, FlatList, ActivityIndicator } from "react-native";
import Config from "../../config/Config";

import IframeRenderer, { iframeModel } from '@native-html/iframe-plugin';   // npm install @native-html/iframe-plugin
import RenderHTML from 'react-native-render-html';                          // npm install react-native-render-html
import WebView from 'react-native-webview';                                 // npm install react-native-webview

const renderers = {
    iframe: IframeRenderer
};

const customHTMLElementModels = {
    iframe: iframeModel
};

const PaperDetail = ({ navigation, route }) => {

    const [html, setHtml] = useState(route.params.data.conten);
    const [detail, setDetail] = useState(null);

    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        getDetailPaper(route.params.data.id);
    }, []
    );

    const getDetailPaper = async (paper_id = 0) => {
        if (paper_id) {
            try {
                const detail = await fetch(Config.url + Config.api_request.getPaperDetail + paper_id);
                var result = await detail.json();
                if (result) {
                    setDetail(result);
                } else {
                    navigation.goBack();
                }
            } catch (error) {
                navigation.goBack();
            }

        }
    };

    const onRefresh = () => {
        // alert("refresh");
        getDetailPaper(route.params.data.id);

    }

    if (detail) {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={{ flex: 1, padding: 8 }}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                <Text style={{ fontSize: 18, fontWeight: "600", color: "green", textDecorationLine: "underline" }}>{detail.title}</Text>
                {/* <RenderHTML contentWidth={Dimensions.get("screen").width} source={{ html }}></RenderHTML> */}
                <RenderHTML
                    renderers={renderers}
                    WebView={WebView}
                    source={{ html: detail.conten }}
                    contentWidth={Dimensions.get("screen").width}
                    customHTMLElementModels={customHTMLElementModels}
                    defaultWebViewProps={
                        {
                            /* Any prop you want to pass to all WebViews */
                        }
                    }
                    renderersProps={{
                        iframe: {
                            scalesPageToFit: true,
                            webViewProps: {
                                /* Any prop you want to pass to iframe WebViews */
                            }
                        }
                    }}
                />
                <View style={{height: 1, backgroundColor: "black"}}></View>
                {/* <Text></Text> */}
                <LastNews paper_id={route.params.data.id} navigation={navigation}></LastNews>
            </ScrollView>
        );
    } else {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                 <ActivityIndicator size="small" color="#0000ff" />
                {/* <Image source={require("../../assets/DoubleRing-1s-200px.gif")} style={{ width: 100, height: 100 }}></Image> */}
                <Text>loading...</Text>
            </View>);
    }
}

const LastNews = (props) => {
    const { paper_id, navigation } = props;
    const [data, setData] = useState(['1', "2", "3", "4", "5"]);

    const getRelatedPaper = async () => {
        try {
            let request_api = Config.url + Config.api_request.getRelatedPaper + paper_id;
            const response = await fetch(getRelatedPaper);
            const _data = await response.json();
            setData(_data?.["items"]);
        } catch (error) {console.log(error);}
    }
    useEffect(() => {
        // console.log(paper_id);
    }, [])

    return (
        <View  style={{paddingBottom: 20, marginTop: 20}}>
            <FlatList data={data} 
                keyExtractor={(item) => item.id}
                renderItem={({item})=><Text>{item}</Text>}>
            </FlatList>
        </View>
    );
}

export default PaperDetail;