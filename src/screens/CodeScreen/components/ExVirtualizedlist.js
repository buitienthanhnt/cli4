import React from 'react';
import {
  SafeAreaView,
  View,
  VirtualizedList,
  StyleSheet,
  Text,
  StatusBar,
  FlatList,
  ScrollView
} from 'react-native';

const data = [1,2,3,4,5,6,7,8,9,10,11, 12];

const getItem = (_data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index + 1}`,
});

const getItemCount = _data => 50;

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <FlatList 
        data={data} 
        renderItem={({item})=>{
            return(
                <View style={{height: 40, backgroundColor: 'blue', margin:5}}>
                    <Text>{item}</Text>
                </View>)
        }}>
        </FlatList>
  </View>
);

const Item2 = ()=>{
    return <View style={{height: 120, backgroundColor: 'green'}}>
        <Text>item2</Text>
        {/* <FlatList 
            data={data} 
            renderItem={({item})=>{
                return(
                    <View>
                        <Text>{item}</Text>
                    </View>)
                }}>
            </FlatList> */}
    </View>
}

const ExVirtualizedlist = () => {
  return (
    <View style={styles.container}>
      <VirtualizedList
        initialNumToRender={4}
        renderItem={({item, index}) => {
            if (false) {
                return<Item2></Item2> ;
            }else{
                return <Item title={item.title} />;
            }
        }}
        // keyExtractor={item => item.id}
        getItemCount={()=>{return 2;}}
        getItem={getItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
});

export default ExVirtualizedlist;