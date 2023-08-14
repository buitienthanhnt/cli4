/**
 * @format
 */

import {AppRegistry, Linking} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import  messaging from "@react-native-firebase/messaging";
import inAppMessaging from '@react-native-firebase/in-app-messaging';

async function bootstrap() {
	await inAppMessaging().setMessagesDisplaySuppressed(true);
}

bootstrap();

messaging().setBackgroundMessageHandler(async message=>{
	// navigation to screen
	console.log(message);
});

messaging().onNotificationOpenedApp(messaging => {
	// mở app và điều hướng vào screen nào đó
	console.log(messaging.data.screen, `myapp://app/${messaging.data.screen}`);
	Linking.openURL(`myapp://app/${messaging.data.screen}`);
})

AppRegistry.registerComponent(appName, () => App);

// npx uri-scheme open myapp://app/MoreScreen --android (mở app và điều hướng tới 1 màn hình nào đó)
