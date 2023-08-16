import {AppRegistry, Linking} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './src/utils/messaging';
import './src/utils/inAppMessage';

AppRegistry.registerComponent(appName, () => App);


								// =============================== //
// npx uri-scheme open myapp://app/MoreScreen --android (mở app và điều hướng tới 1 màn hình nào đó)

// chạy app trên thiết bị thật:
// b1: Bật gỡ lỗi qua USB:-> bật menu "Tùy chọn nhà phát triển" bằng cách: Cài đặt → Giới thiệu về điện thoại → Thông tin phần mềm rồi nhấn Build number bảy lần vào hàng ở dưới cùng
// b2:  Cắm thiết bị của bạn qua USB(xem kết nối bằng cách chạy cmd: adb devices)
	// $ adb devices
	// List of devices attached
	// emulator-5554 offline   # Google emulator
	// 14ed2fcc device         # Physical  (thiết bị vật lý)
// b3: chạy app: npx react-native run-android

								// =============================== //