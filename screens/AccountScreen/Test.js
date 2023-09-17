import React, { useState, useReducer, useEffect, useRef } from "react";
import { Button, Text, View, Image } from "react-native";

import axios from 'react-native-axios';
import Config from "../../config/Config";

import { fechData, getAxios, anyAxios } from "../../src/hooks/NetWorking";
import * as RootNavigation from "../../src/hooks/Navigate";
import { useNavigation } from '@react-navigation/native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

// https://www.youtube.com/watch?v=LlvBzyy-558
const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD':
			return { count: state.count + 0.1, showText: state.showText };
			break;
		case 'toggle':
			return { count: state.count, showText: !state.showText };
		default:
			return state;
			break;
	}
};

const Test = () => {
	// console.log('popopopoop');
	const [value, setValue] = useState(0);
	const [viture, setViture] = useState(false);
	const [email, setEmail] = useState('');
	const input = useRef(null);
	const navigation = useNavigation();

	// goi 1 lan dau tien, sau do goi theo thay doi cua tham so lang nghe neu tham so do thay doi. can dat sau tham so lang nghe
	useEffect(() => {
		// console.log('noi dung nam trong ham useeffect');

		// fetch('https://jsonplaceholder.typicode.com/todos/1')
		// 	.then(response => response.json())
		// 	.then(json => console.log(json));

		axios({ method: "get", url: 'https://jsonplaceholder.typicode.com/posts/1/comments' }).then((response) => {
			// setEmail(response?.data[1].email || 'email not found');
			// console.log('+++++');
			// console.log(response.data[0]); 


		}).catch((error) => {
			console.log(error);
		})

	}, [email, value])


	const fetchData = async () => {

		// let url = Config.custom_url() + Config.api_request.testData; // test Get api
		let url = Config.custom_url() + Config.api_request.testData;
		const value = await fechData(url, null, "GET"); 	// dùng  fetch với method post sẽ không vào throw error được(là 1 hạn chế nên ưu tiên dùng asios).
		console.log(value);
	}

	// demo: https://www.thunderclient.com/welcome
	const fetchAxios = async () => {
		// anyAxios
		let url = Config.custom_url() + Config.api_request.testPost; 	// testPost test Post api with param
		const value = await anyAxios(url, { a: 1, b: 2 }, "POST");   		// dùng cho method post
		console.log(value);
	}



	const [state, dispatch] = useReducer(reducer, { count: 5, showText: false })
	const add = () => {
		// setValue(_setData);
		setValue(_setData);
	}

	const toScreen = (name, params = {}) => {
		RootNavigation.navigate(name, params); // to paper detail
		// RootNavigation.LinkingNavigate('Code');
	}

	// setValue nhuw nay dusng hon(bat gia tri thuc te gan nhat) la gan vowi gia tri truc tiesp
	const _setData = (prev) => {
		return prev + 1;
	}
	return (
		<View style={{ padding: 8 }}>
			<Text>{value}: vi du ve setValue useState Hook</Text>
			<Button title="add" onPress={() => {
				add();
				setViture(!viture)
			}}></Button>
			<Text>=================================</Text>

			<Text>{state.count}</Text>
			{state.showText && <Text>show text for demo hook useReducer use dispatch</Text>}
			<Button title="dispath" onPress={() => {
				dispatch({ type: 'ADD' })
				dispatch({ type: 'toggle' })
			}}></Button>
			<Text>{'\n'}</Text>

			<Button title="fetch data api" onPress={() => {
				fetchData()
			}}></Button>
			<Text>{'\n'}</Text>

			<Button title="to CodeScreen by Hook" onPress={() => {
				toScreen('CodeScreen')
			}}></Button>
			<Text>{'\n'}</Text>

			<Button title="fetch data api axios" onPress={() => {
				fetchAxios()
			}}></Button>
			<Text>{'\n'}</Text>

			<View style={{ marginVertical: 10 }}>
				<SkeletonPlaceholder borderRadius={4} speed={0} backgroundColor={'rgba(0, 0, 167, 0.4)'}>
					<SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
						<SkeletonPlaceholder.Item width={60} height={60} borderRadius={50} />
						<SkeletonPlaceholder.Item marginLeft={20} width={'100%'} paddingRight={20}>
							<SkeletonPlaceholder.Item width={'50%'} height={20} />
							<SkeletonPlaceholder.Item marginTop={6} width={'70%'} height={20} />
							<SkeletonPlaceholder.Item marginTop={6} height={20} width={'70%'} />
						</SkeletonPlaceholder.Item>
					</SkeletonPlaceholder.Item>
				</SkeletonPlaceholder>
			</View>

			<View style={{ marginVertical: 10 }}>
				<SkeletonPlaceholder borderRadius={4} speed={0} backgroundColor={'rgba(0, 0, 167, 0.4)'}>
					<SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
						<SkeletonPlaceholder.Item width={60} height={60} borderRadius={50} />
						<SkeletonPlaceholder.Item marginLeft={20} width={'100%'} paddingRight={20}>
							<SkeletonPlaceholder.Item width={'50%'} height={20} />
							<SkeletonPlaceholder.Item marginTop={6} width={'70%'} height={20} />
							<SkeletonPlaceholder.Item marginTop={6} height={20} width={'70%'} />
						</SkeletonPlaceholder.Item>
					</SkeletonPlaceholder.Item>
				</SkeletonPlaceholder>
			</View>


			{/* <SkeletonPlaceholder borderRadius={4} speed={1250}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<View style={{ width: 60, height: 60, borderRadius: 50 }} />
					<View style={{ marginLeft: 20 }}>
						<Image style={{ width: '100%', height: 20 }} src={require('../../assets/Ripple-1s-200px.gif')} />
						<Text style={{ marginTop: 6, fontSize: 14, lineHeight: 18 }}>Hello world</Text>
					</View>
				</View>
			</SkeletonPlaceholder> */}
		</View>
	);
}

export { Test };