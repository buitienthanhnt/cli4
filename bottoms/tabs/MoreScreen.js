import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ColorIcon from '../../screens/MoreScreen/ColorIcon';
import { CategoryTree } from '../../screens/MoreScreen/CategoryTree';
import SwipeListViews from '../../screens/MoreScreen/SwipeListViews';

const Stack = createNativeStackNavigator();
const MoreScreen = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='CategoryTree' component={CategoryTree} options={{headerShown: false}} />
            <Stack.Screen name='ColorIcon' component={ColorIcon} options={{headerShown: true}} />
            <Stack.Screen name='SwipeListViews' component={SwipeListViews} options={{headerShown: true}} />
        </Stack.Navigator>
    );
};

export default MoreScreen;