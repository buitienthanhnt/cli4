import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ColorIcon from '../../screens/MoreScreen/ColorIcon';
import linking from '../../linking';

const Stack = createNativeStackNavigator();
const MoreScreen = ()=>{
    return(
        <Stack.Navigator linking={linking}>
            <Stack.Screen name='ColorIcon' component={ColorIcon} options={{headerShown: false}} />
        </Stack.Navigator>
    );
};

export default MoreScreen;