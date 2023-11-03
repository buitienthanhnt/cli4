import { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import functions, { firebase } from '@react-native-firebase/functions';

const FireStore = () => {

	const usersCollection = firestore().collection('demo1');
	const reference = storage().ref('/m4700/-3886-1666684596.jpg');

	const getData = async () => {

		const reference = await storage().ref('/m4700/-3886-1666684596.jpg').getDownloadURL(); // lay url anh view.

		console.log(reference);
		// const users = await firestore().collection('demo1').get();
		// const user = await firestore().collection('demo1').doc('rvTeXqX2cb9aKVH7r6XO').get();
		// console.log(users, '____', user);
	}

	useEffect(() => {
		firebase.functions().useEmulator('localhost', 5001);
		// getData();
	}, []);

	return (
		<View style={{padding: 10,}}>
			<Text>react native firebase store</Text>
			{/* <Image source={{uri: reference}} style={{width: 120, height: 120}}></Image> */}
			<TouchableOpacity 
				style={{backgroundColor: 'rgba(70, 0, 0, 0.7)', borderRadius: 6, height: 24, alignSelf: 'flex-start'}} 
				onPress={async () => {
					functions()
					.httpsCallable('someMethod')({ abc: 123 })
					.then(response => {
						console.log('++++', response.data);
					});
					// const usersCollection = await firestore().collection('listUser').doc('u1@gmail.com').get();
					// console.log('______', usersCollection);
				}}
			>
				<Text>data by function from store</Text>
			</TouchableOpacity>
		</View>
	)
};

export default FireStore;