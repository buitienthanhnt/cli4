import { useEffect } from "react";
import { Image, Text, View } from "react-native";

import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const FireStore = ()=>{

	const usersCollection = firestore().collection('demo1');
	const reference = storage().ref('/m4700/-3886-1666684596.jpg');

	const getData = async ()=>{

		const reference = await storage().ref('/m4700/-3886-1666684596.jpg').getDownloadURL(); // lay url anh view.

		console.log(reference);
		// const users = await firestore().collection('demo1').get();
		// const user = await firestore().collection('demo1').doc('rvTeXqX2cb9aKVH7r6XO').get();
		// console.log(users, '____', user);
	}

	useEffect(()=>{
		getData();
	}, []);

	return(
		<View>
			<Text>react native firebase store</Text>
			{/* <Image source={{uri: reference}} style={{width: 120, height: 120}}></Image> */}
		</View>
	)
};

export default FireStore;