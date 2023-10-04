import messaging from "@react-native-firebase/messaging"; // lưu ý cần bật tính năng firebase push notification trên firebase. test in: https://testfcm.com/
import { Linking } from 'react-native';
// import inAppMessaging from '@react-native-firebase/in-app-messaging';
// import analytics from '@react-native-firebase/analytics';

messaging().setBackgroundMessageHandler(async message => {
	// navigation to screen
	console.log(message);
});

messaging().onNotificationOpenedApp(messaging => {
	// mở app và điều hướng vào screen nào đó
	// {
	// 	"collapseKey": "com.cli4",
	// 	"data": {
	// 		"pid": "123"
	// 	},
	// 	"from": "515691323092",
	// 	"messageId": "0:1696262980305161%d89f2361d89f2361",
	// 	"notification": {
	// 		"android": {
	// 			"imageUrl": "https://cdnstoremedia.com/adt/adn/2017/01/anh2-adx5886b6d7ca7ac.jpg"
	// 		},
	// 		"body": "ooo",
	// 		"title": "ppp"
	// 	},
	// 	"sentTime": 1696262728039,
	// 	"ttl": 2419200
	// }
	console.log(messaging);
	console.log(messaging.data.screen, `myapp://app/${messaging.data.screen}`);
	Linking.openURL(`myapp://app/${messaging.data.screen}`);
})