import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView, TouchableOpacity, StyleSheet, Image
} from 'react-native';

//   npm install --save react-native-snap-carousel ||(type Typescript) npm install --save @types/react-native-snap-carousel
import Carousel from 'react-native-snap-carousel'; // https://www.npmjs.com/package/react-native-snap-carousel#example

export default class Carolsel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "I discovered Soviet herita",
          text: "Text 1",
        },
        {
          title: "VietnamSau Ukraina, Nga c",
          text: "Text 2",
        },
        {
          title: "dã sử dụng đạn chùm",
          text: "Text 3",
        },
        {
          title: "thương rất khủng khiếp",
          text: "Text 4",
        },
        {
          title: "Bình luận BTCS 19-7",
          text: "Text 5",
        },
      ]
    }
  }

  _renderItem({ item, index }) {
    return (
      <TouchableOpacity style={css.item}
        onPress={() => { console.log(item.title); }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#5877f4" }}>{item.title}</Text>
        {/* <Text>{item.text}</Text> */}
        <Image source={require("../../../assets/6623ThuydienLaiChau1_1.jpg")} style={{flex: 1}}></Image>
      </TouchableOpacity>

    )
  }

  render() {
    return (
      <SafeAreaView style={css.area}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
          <Carousel
            layout={"stack"}
            ref={ref => this.carousel = ref}
            data={this.state.carouselItems}
            sliderWidth={400}
            itemWidth={360}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({ activeIndex: index })} />
        </View>
      </SafeAreaView>
    );
  }
}

const css = StyleSheet.create({
  area: {
    flex: 1,
    paddingTop: 10,
    borderRadius: 12
    // backgroundColor: '#c4f4b0',
    // paddingBottom: 10,
  },
  item: {
    // backgroundColor: '#b2ddf4',
    borderRadius: 5,
    height: 250,
    padding: 10,
    marginRight: 20
    // marginLeft: 20,
  }
});

