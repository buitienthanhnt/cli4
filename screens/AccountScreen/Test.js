import React, { useState, useReducer, useEffect, useRef } from "react";
import { Button, Text, View } from "react-native";

import axios from 'react-native-axios';
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

	// goi 1 lan dau tien, sau do goi theo thay doi cua tham so lang nghe neu tham so do thay doi. can dat sau tham so lang nghe
	useEffect(() => {
		console.log('noi dung nam trong ham useeffect');

		// fetch('https://jsonplaceholder.typicode.com/todos/1')
		// 	.then(response => response.json())
		// 	.then(json => console.log(json));
		
		axios({method: "get", url: 'https://jsonplaceholder.typicode.com/posts/1/comments'}).then((response)=>{
			// setEmail(response?.data[1].email || 'email not found');
			console.log('+++++');
			// console.log(response.data[0]); 
			

		}).catch((error)=>{
			console.log(error);
		})

	}, [email, value])



	const [state, dispatch] = useReducer(reducer, { count: 5, showText: false })
	const add = () => {
		// setValue(_setData);
		setValue(_setData);
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
		</View>
	);
}

export { Test };