import messaging from "@react-native-firebase/messaging"; // lưu ý cần bật tính năng firebase push notification trên firebase.
import {Linking} from 'react-native';
// import inAppMessaging from '@react-native-firebase/in-app-messaging';
// import analytics from '@react-native-firebase/analytics';

messaging().setBackgroundMessageHandler(async message => {
	// navigation to screen
	console.log(message);
});

messaging().onNotificationOpenedApp(messaging => {
	// mở app và điều hướng vào screen nào đó
	console.log(messaging.data.screen, `myapp://app/${messaging.data.screen}`);
	Linking.openURL(`myapp://app/${messaging.data.screen}`);
})