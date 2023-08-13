import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/HomeScreen/Home';
import linking from '../../linking';

const Stack = createNativeStackNavigator();
const HomeScreen = ()=>{
    return(
        <Stack.Navigator linking={linking}>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default HomeScreen;