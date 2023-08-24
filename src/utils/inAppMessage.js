import inAppMessaging from '@react-native-firebase/in-app-messaging';
	// bật tính năng: in-app-messaging trên firebase(thì nó mới gửi in-app-message):   
	// vào: https://console.cloud.google.com/apis/library/firebaseinappmessaging.googleapis.com?project=[project_name]
	// ví dụ:  https://console.cloud.google.com/apis/library/firebaseinappmessaging.googleapis.com?project=react-cli4
    // https://viblo.asia/p/firebase-in-app-messaging-in-android-XL6lA6Xr5ek

// inAppMessage nếu dùng url link thường sẽ mở webview, nên để mở app screen cần dùng dạng linking: myapp://do_something ví dụ: myapp://app/WebInApp/www.topsy-fashion.nl
// https://stackoverflow.com/questions/64891125/rnfirebase-in-app-messaging-how-to-handle-button-clicks