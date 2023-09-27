import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ColorIcon from '../../screens/MoreScreen/ColorIcon';
import { CategoryTree } from '../../screens/MoreScreen/CategoryTree';
import SwipeListViews from '../../screens/MoreScreen/SwipeListViews';
import SwiperComponent from '../../screens/MoreScreen/SwiperComponent';
import { Platform } from 'react-native';

const Stack = createNativeStackNavigator();
const MoreScreen = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='CategoryTree' component={CategoryTree} options={{headerShown: false}} />
            <Stack.Screen name='ColorIcon' component={ColorIcon} options={{headerShown: Platform.OS == 'ios'}} />
            <Stack.Screen name='SwipeListViews' component={SwipeListViews} options={{headerShown: true}} />
            <Stack.Screen name='SwiperComponent' component={SwiperComponent} options={{headerShown: true}} />
        </Stack.Navigator>
    );
};

export default MoreScreen;