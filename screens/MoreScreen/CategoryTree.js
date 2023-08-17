import React, { useCallback, useEffect, useMemo, useState } from "react";
import { View, Text, FlatList, StyleSheet, Button, Image, TouchableOpacity } from "react-native";
import Config from "../../config/Config";
import axios from 'react-native-axios'; // npm i react-native-axios
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'; // https://fontawesome.com/v5/search?q=right&o=r
import Collapsible from 'react-native-collapsible';  // npm install --save react-native-collapsible

const CategoryTree = (props) => {
    const [category_id, setCategoryId] = useState(0);
    const [tree, setTree] = useState(null);

    const getCategoryTree = useCallback(async () => {
        let request = Config.custom_url() + Config.api_request.getCategoryTree + Config.buy_params({ category_id: category_id });
        // console.log("begin call");
        const detail = await fetch(request);
        var result = await detail.json();
        // console.log(result);
        setTree(result);
        // console.log("end call");
    }, [category_id])

    useEffect(() => {
        // console.log("get category tree");
        getCategoryTree();
        // console.log("get category tree success");
    }, [category_id])

    if (!tree) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                {/* <ActivityIndicator size="small" color="#0000ff" /> */}
                <Image source={require("../../assets/Ripple-1s-200px.gif")} style={{ width: 60, height: 60 }}></Image>
            </View>);
    } else {
        return (
            <View style={css.container}>
                <FlatList
                    data={tree?.items}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return <CategoryItem data={item} navigation={props.navigation}></CategoryItem>
                    }}
                ></FlatList>
                <Button title="show data" onPress={() => {
                    console.log(tree);
                }}></Button>
                <Text>{"\n"}</Text>

                <Button title="to suport" onPress={() => {
                    props.navigation.navigate("ColorIcon")
                }}></Button>
            </View>
        )
    }
}

const CategoryItem = (props) => {
    const [status, setStatus] = useState(true)
    useEffect(
        () => {
            // console.log("CategoryItem");
        }, []
    )

    return (
        <View style={{paddingLeft: 6, paddingRight: 6}}>
            <View style={css.categoryItem}>
                <TouchableOpacity onPress={()=>{
                    props?.navigation.navigate("PaperScreen", { screen: "PaperListCategory", params: {category_id: props?.data?.id}})
                }}>
                    <Text style={css.categoryItemName}>{props?.data?.name}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    props?.data?.items && setStatus(!status);
                }}>
                    {props?.data?.items && <FontAwesome5Icon name={status ? 'plus' : 'chevron-down'} size={18} color='#000000' />}
                </TouchableOpacity>
            </View>
            {props?.data?.items && 
            <Collapsible collapsed={status}>
                <View style={{paddingLeft: 10, paddingRight: 8}}>
                    <FlatList
                        data={props?.data?.items}
                        renderItem={({ item }) => {
                            return <CategoryItem data={item} navigation={props.navigation}></CategoryItem>
                        }}
                    ></FlatList>
                </View>
            </Collapsible>}
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 12
    },
    categoryItem: {
        padding: 4,
        paddingLeft: 10,
        margin: 2,
        backgroundColor: "#dddddd",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 15,
        borderRadius: 4
    },
    categoryItemName: {
        fontSize: 18,
        color: "#000000"
    }
})

export { CategoryTree };