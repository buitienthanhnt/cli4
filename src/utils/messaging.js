import messaging from "@react-native-firebase/messaging"; // lưu ý cần bật tính năng firebase push notification trên firebase. test in: https://testfcm.com/
import { Linking } from 'react-native';
import notifee from '@notifee/react-native'; // https://notifee.app/react-native/docs/installation

// import inAppMessaging from '@react-native-firebase/in-app-messaging';
// import analytics from '@react-native-firebase/analytics';

messaging().setBackgroundMessageHandler(async message => {
	// navigation to screen
	console.log(message);
});

// chạy khi có thông báo gửi tới, kể  cả đang trong app(thường dùng cho: Notifee - React Native)
messaging().onMessage((message) => {
	console.log(message);
	onDisplayNotification(); // push notification by: notifee
});

async function onDisplayNotification() {
	// Request permissions (required for iOS)
	await notifee.requestPermission()

	// Create a channel (required for Android)
	const channelId = await notifee.createChannel({
		id: 'default',
		name: 'Default Channel',
	});

	// Display a notification
	await notifee.displayNotification({
		title: 'Notification Title',
		body: 'Main body content of the notification',
		android: {
			channelId,
			smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
			// https://topdev.vn/blog/cach-tao-icon-tuong-thich-tren-android-bang-android-studio/
			// pressAction is needed if you want the notification to open the app when pressed
			pressAction: {
				id: 'default',
			},
		},
	});
}

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
	console.log(messaging.data.screen, `myapp://app/${messaging.data.screen}`);
	Linking.openURL(`myapp://app/${messaging.data.screen}`);
})