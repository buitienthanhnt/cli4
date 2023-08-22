import react, { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, RefreshControl, Text, View, FlatList, ActivityIndicator, StyleSheet, Button, TextInput, TouchableOpacity } from "react-native";
import Config from "../../config/Config";
import axios from 'react-native-axios';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from "react-native-elements/dist/helpers";

const Sdetail = () => {
    const [detail, setDetail] = useState(null);
    const [store, setStore] = useState([]);

    useEffect(() => {
        stores();
        proData();
    }, []);

    const stores = async () => {
        let request = Config.custom_url() + "api/getStore";
        const result = await fetch(request);
        const data = await result.json();
        setStore(data);
        // console.log(data);
    }

    const proData = async () => {
        let resquest = Config.custom_url() + "api/sdetail";
        axios({
            method: 'get',
            url: resquest,
        }).then((response) => {
            setDetail(response.data);
        });
    }

    if (!detail) {
        return <View>
            <Text>not has product detail data</Text>
        </View>
    } else {
        return (
            <View style={css.container}>
                <TopSerach></TopSerach>
                <ProDetail detail={detail}></ProDetail>
                <StoreList stores={store}></StoreList>
            </View>
        )
    }
}

const TopSerach = () => {
    const [search, setSearch] = useState('');
    useEffect(() => { }, [])
    return (
        <View style={css.topSearch}>
            <View style={css.location}>
                <Icon name='location-arrow' size={40} color='#4c4c4c' />
            </View>
            <View style={css.search}>
                <Icon name='search' size={28} color='#4c4c4c' />
                <TextInput
                    value={search}
                    style={css.postCode}
                    onChangeText={(text) => {
                        setSearch(text);
                    }}
                    onFocus={() => {

                    }}
                    placeholder="Postcode of plaats"
                ></TextInput>
            </View>
        </View>
    );
}

const ProDetail = (props) => {
    const [selected, setSelected] = useState(null);

    useEffect(() => { }, [props])
    return (
        <View style={css.detailContainer}>
            <View style={css.proImgage}>
                <Image
                    style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                    source={{ uri: 'https://cdn11.bigcommerce.com/s-4cnnicdo9y/images/stencil/120x180/products/2845/19117/08962-6911-fancy__50291.1685064043.jpg?c=1' }}></Image>
            </View>
            <View style={{ flex: 1, paddingLeft: 8 }}>
                <Text style={{ fontSize: 20, fontWeight: '400', color: 'black' }}>{props?.detail?.data?.site?.product?.name}</Text>
                <View style={{ flex: 1, flexDirection: 'row', paddingBottom: 10, alignItems: 'flex-end' }}>
                    <ScrollView
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        style={{}}
                    >
                        {props?.detail?.data?.site?.product?.variants?.edges.map((i) => {
                            return (
                                <View style={{ height: 50, width: 50, backgroundColor: i?.node?.options?.edges[0]?.node?.values?.edges[0]?.node?.entityId == selected ? '#00003d' : '#d8d8d8', marginLeft: 6, borderRadius: 10, justifyContent: "center", alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => {
                                        setSelected(i?.node?.options?.edges[0]?.node?.values?.edges[0]?.node?.entityId)
                                    }}>
                                        <Text style={{ fontSize: 18, color: i?.node?.options?.edges[0]?.node?.values?.edges[0]?.node?.entityId == selected ? 'white' : 'black' }}>{i?.node?.options?.edges[0]?.node?.values?.edges[0]?.node?.label} </Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })}

                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

const StoreList = (props) => {
    useEffect(() => {
    }, [])
    return (
        <View style={{marginTop: 20}}>
            {
                props?.stores &&
                <FlatList
                    data={props?.stores}
                    keyExtractor={(item) => { return item?.store?.id }}
                    renderItem={({ item }) => {
                        return <StoreItem store={item}></StoreItem>
                    }}
                ></FlatList>
            }
        </View>
    )
}

const StoreItem = (props) => {
    useEffect(() => {
        // console.log(props);
    }, [])
    return (
        <View style={{ paddingHorizontal: 8, height: 50, flexDirection: 'row' }}>
            <View>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: 'black' }}>{props?.store?.store?.name}</Text>
                <View></View>
            </View>
            <View>

            </View>
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8
    },
    location: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#4c4c4c",
        justifyContent: "center",
        alignItems: "center"
    },
    search: {
        width: '80%',
        backgroundColor: '#e8e8e8',
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        borderRadius: 10
    },
    postCode: {
        height: 50,
        borderColor: "green",
        borderRadius: 6,
        paddingLeft: 8,
        width: "90%",
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    topSearch: {
        justifyContent: 'center',
        flexDirection: "row",
    },
    detailContainer: {
        marginTop: 30,
        flexDirection: 'row',
        width: '100%',
        height: Dimensions.get('screen').height / 6,
        justifyContent: ''
    },
    proImgage: {
        width: Dimensions.get('screen').width / 5,
    }
});

export { Sdetail };