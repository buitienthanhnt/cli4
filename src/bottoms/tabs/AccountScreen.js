import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login          from '@screens/AccountScreen/Login';
import Wishlist       from '@screens/AccountScreen/Wishlist';
import FireStore      from '@screens/AccountScreen/FireStore';
import AccountDetail  from '@screens/AccountScreen/AccountDetail';
import { UserDetail } from '@screens/AccountScreen/Authen/UserDetail';
import { Test, CloudFun, DataBase } from '@screens/AccountScreen/Test';

const Stack = createNativeStackNavigator();
const AccountScreen = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="AccountDetail" component={AccountDetail} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Wishlist" component={Wishlist} options={{ headerShown: true }} />
            <Stack.Screen name="Test" component={Test} options={{ headerShown: true }} />
            <Stack.Screen name="CloudFun" component={CloudFun} options={{ headerShown: true }} />
            <Stack.Screen name="DataBase" component={DataBase} options={{ headerShown: true }} />
            <Stack.Screen name="FireStore" component={FireStore} options={{ headerShown: true }} />
            <Stack.Screen name="UserDetail" component={UserDetail} options={{ headerShown: true }} />
        </Stack.Navigator>
    );
};

export default AccountScreen;
