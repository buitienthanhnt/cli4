import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Paper from '@screens/PaperScreen/Paper';
import Detail from '@screens/PaperScreen/Detail';
import PaperList from '@screens/PaperScreen/PaperList';
import PaperDetail from '@screens/PaperScreen/PaperDetail';
import PaperListCategory from '@screens/PaperScreen/PaperListCategory';
import { Sdetail } from '@screens/PaperScreen/Sdetail';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import WebInApp from '@screens/PaperScreen/WebInApp';

const Stack = createNativeStackNavigator();
const PaperScreen = (props) => {
    const back = ()=>{
        props.navigation.goBack();
    }

    return (
        <Stack.Navigator>
            <Stack.Screen name="PaperList" component={PaperList} options={{ headerShown: false }} />
            <Stack.Screen name="PaperDetail" component={PaperDetail} options={{ headerShown: true }} />
            <Stack.Screen name="PaperListCategory" component={PaperListCategory} options={{ headerShown: false }} />
            <Stack.Screen name="Paper" component={Paper} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={Detail} options={{ headerShown: true }} />
            <Stack.Screen name="WebInApp" component={WebInApp} options={{ headerShown: false }} />
            {/* <Stack.Screen name="PaperList" component={PaperList} options={{ headerShown: false }} /> */}
            <Stack.Screen name="Sdetail" component={Sdetail}
                          options={{ // custom header of page xem: https://reactnavigation.org/docs/header-buttons && https://reactnavigation.org/docs/headers
                              headerShown: true,
                              title: "Bekijk Winkelvoorraad",
                              headerTitleAlign: 'center',
                              headerStyle: {
                                  backgroundColor: '#939393',
                              },
                              headerTintColor: '#fff',
                              headerTitleStyle: {
                                  fontWeight: 'bold',
                              },
                              headerLeft: () => (
                                  <FontAwesome5Icon name={'chevron-left'} size={22} color='#ffffff' onPress={()=>{
                                      back();
                                  }} />
                              ),
                          }}
            />
        </Stack.Navigator>
    );
};

export default PaperScreen;