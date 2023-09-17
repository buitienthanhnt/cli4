import {Linking} from 'react-native';
// import {Layout, LayoutRoot, Navigation, Options} from 'react-native-navigation'; // https://wix.github.io/react-native-navigation/docs/installing


const navigate = (homeScreen = '', options = {})=>{
	Linking.openURL(`myapp://app/${homeScreen}`);
}

const compId = (selfOrCompId) => {
	// return get(selfOrCompId, 'props.componentId') || (selfOrCompId);
  };

// const pushScreen = (homeScreen = '', options = {})=>{
// 	Navigation.push(homeScreen);
// }

export {navigate}