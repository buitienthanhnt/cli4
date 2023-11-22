import { FlatList, ScrollView, Text, TouchableOpacity, View, VirtualizedList } from "react-native";
import data from '../../../config/studio/storeData';

const arr = [
	1, 2, 3, 4, 5, 6, 7, 8, 89, 90, 0, 12, 34
]
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 89, 90, 0,];
const FlatInScroll = () => {
	return (
		<ScrollView style={{flex: 1}}>
			<Text>FlatInScroll</Text>

			<View style={{flex: 1}}>
				<FlatList
					nestedScrollEnabled={true}
					ScrollEnabled={false}
					showsVerticalScrollIndicator={false}
					data={arr}
					// getItemCount={()=>{
					// 	return arr.length;
					// }}
					ListFooterComponent={()=>{
						return <Item2></Item2>;
					}}
					ListFooterComponentStyle={{marginTop: 50, backgroundColor: 'red'}}
					renderItem={({ item }) => {
						return <Item></Item>
					}}></FlatList>
					
			</View>

			{/* {(() => {
				return arr.map((item) => {
					return <Text key={item + ''}>{item}</Text>
				})
			})()} */}

			{/* {arr.map((item) => <Item item={item} />)} */}
		</ScrollView>);
}

const Item = () => {
	return (
		<View>
			<Text>noi dung trong item childrent</Text>
			<TouchableOpacity onPress={() => {
				console.log(123);
			}}>
				<Text>onPress</Text>
				<Text></Text>
			</TouchableOpacity>
		</View>
	);
}

const Item2 = () => {
	return (<View >
		<FlatList
			showsVerticalScrollIndicator={false}
			data={arr2}
			// getItemCount={()=>{
			// 	return arr2.length;
			// }} 
			renderItem={({ item }) => {
				return <View>
					<Text>123</Text>
					<Text></Text>
				</View>
			}}></FlatList>
	</View>);
}

export default FlatInScroll;