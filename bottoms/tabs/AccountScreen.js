import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login         from '../../screens/AccountScreen/Login';
import AccountDetail from '../../screens/AccountScreen/AccountDetail';
import Wishlist from '../../screens/AccountScreen/Wishlist';
import linking from '../../linking';

const Stack = createNativeStackNavigator();
const AccountScreen = ()=>{
    return(
        <Stack.Navigator linking={linking}>
            <Stack.Screen name="AccountDetail" component={AccountDetail} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: true }} />
            <Stack.Screen name="Wishlist" component={Wishlist} options={{ headerShown: true }} />
        </Stack.Navigator>
    );
};

export default AccountScreen;