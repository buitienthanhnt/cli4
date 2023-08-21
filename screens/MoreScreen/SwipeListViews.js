import React, { useState, useRef, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  RefreshControl
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

// npm i react-native-swipe-list-view
import { SwipeListView } from 'react-native-swipe-list-view';

export default function SwipeListViews() {

  const [resfresh, setRefresh] = useState(false);
  const [userData] = useState([
    {
      img: 'http://192.168.100.210/newpaper/public/storage/files/shares/images up/14-1662952325-204-width740height493.jpg',
      name: 'Maurice Davis',
    },
    {
      img: 'https://randomuser.me/api/portraits/women/20.jpg',
      name: 'Bernice Alvarez',
    },
    {
      img: 'http://192.168.100.210/newpaper/public/storage/files/shares/images up/14-1662952325-204-width740height493.jpg',
      name: 'Jennie Barnett',
    },
    {
      img: 'https://randomuser.me/api/portraits/men/55.jpg',
      name: 'Matthew Wagner',
    },
    {
      img: 'https://randomuser.me/api/portraits/men/71.jpg',
      name: 'Christian Wilson',
    },
    {
      img: 'http://192.168.100.210/newpaper/public/storage/files/shares/images up/14-1662952325-204-width740height493.jpg',
      name: 'Sophia Fernandez',
    },
    {
      img: 'http://192.168.100.210/newpaper/public/storage/files/shares/images up/14-1662952325-204-width740height493.jpg',
      name: 'Maurice Davis',
    },
    {
      img: 'https://randomuser.me/api/portraits/women/20.jpg',
      name: 'Bernice Alvarez',
    },
    {
      img: 'http://192.168.100.210/newpaper/public/storage/files/shares/images up/14-1662952325-204-width740height493.jpg',
      name: 'Jennie Barnett',
    },
  ]);

  const onRefresh = useCallback(() => {
    // alert("refresh");
  })
  

  return (
    <ScrollView 
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      refreshControl={<RefreshControl refreshing={resfresh} onRefresh={onRefresh} />}
      style={{flex:1, padding: 6}}
    >           
      <SwipeListView
        data={userData}
        renderItem={(data, rowMap) => (
          <TouchableWithoutFeedback
            onPress={() => {
              // Alert.alert(`Name - ${data.item.name}`);
            }}
          >
            <View
              style={{
                paddingVertical: 10,
                paddingHorizontal: 10,
                marginVertical: 4,
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: "#e37fff",
               
              }}
            >
              <Image
                style={{ width: 40, height: 40, borderRadius: 40, resizeMode: 'cover' }}
                source={{ uri: data.item.img }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  fontWeight: '400',
                  fontSize: 16,
                }}
              >
                {data.item.name}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        )}
        renderHiddenItem={(data, rowMap) => (
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: 10 }}>
            <View style={styles.hiddenItem} >
              <TouchableOpacity
                onPress={() => {
                 setRefresh(true)
                }}
              >
                <Icon name='send' size={28} color='tomato'/>
              </TouchableOpacity>
            </View>
            <View style={styles.hiddenItem} >
              <TouchableOpacity
                onPress={() => {
                setRefresh(false)
                }}
              >
                <Icon name='bug' size={28} color='#00ffca' />
              </TouchableOpacity>
            </View>
          </View>
        )}
        leftOpenValue={60}
        rightOpenValue={-60}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  hiddenItem: {
    width: 50,
    height: '100%',
    marginVertical: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
})