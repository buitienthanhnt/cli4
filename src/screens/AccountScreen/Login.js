import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Dimensions, Image, Text, TextInput, View, TouchableOpacity } from "react-native";
import crashlytics from '@react-native-firebase/crashlytics';
import auth from '@react-native-firebase/auth';  // https://rnfirebase.io/reference/auth/user

const Login = (props) => {

    const [value, setValue] = useState(0);
    const [fullName, setFullName] = useState({ name: 'name', familyName: 'family' });
    const [title, setTitle] = useState({ value: 'useEffect() i a Hooks' });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Set an initializing state whilst Firebase connects
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
        setUser(user);
    }

    // useEffect gọi khi có sư thay đổi trong component
    // setState() nếu là 1 object thì sẽ luôn luôn là thay đổi(nên sẽ gọi: useEffect)(object không đại diện cho các giá trị trong nó) cho nên thông thường cần lắng nghe 1 giá trị cụ thể trong đó, 
    // nếu là 1 value đơn thì sẽ thay đổi khi value thực thay đổi cho nên sẽ gọi useEffect khi giá trị thực thay đổi. 
    // nếu để  dependence là: [] sẽ chỉ gọi 1 lần duy nhất.
    useEffect(() => {
        // console.log("=======>", title);
        // crashlytics().log('App mounted.');
        // setFullName({name:'TrungHC',familyName: 'HCT'});
        // setValue(value+1);
        // setTitle({value: "bbbbbbbbbbbbb"});

        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        // return subscriber; // unsubscribe on unmount

    }, []) // dependence phải lắng nghe giá trị cụ thể còn dạng object: {} sẽ không được vì 1 object có thể có nhiều thuộc tính và nó không liên quan. 

    // hàm tính: trả về giá trị cụ thể dựa vào lần tính trước đó.
    // nó sẽ lắng nghe có sự thay đổi để xác định xem có thực hiện tính toán lại hay không. Nếu không sẽ trả về  value luôn mà không cần tính toán lại. 
    // useMemo(() => {
    //     // các phần xử lý trước để trả về giá trị.
    //     return {
    //         value: "opopopo"
    //     };
    // }, [value]);

    if (user) {
        console.log(user);
        return (
            <View style={{padding: 12}}>
                <Text>Logined</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>user: {user.email}</Text>
                <Text></Text>
                <TouchableOpacity style={{backgroundColor: 'rgba(119, 193, 145, 0.8)', borderRadius: 18, height: 36, justifyContent: "center", alignItems: 'center'}} onPress={()=>{
                    auth()
                    .signOut()
                    .then(() => console.log('User signed out!'));
                }}>
                    <Text>LogOut</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={{ padding: 20 }}>

            <TextInput style={{ borderWidth: 1, borderRadius: 10 }} placeholder="input email"
                onChangeText={(value) => {
                    setEmail(value);
                }}
            ></TextInput>
            <View style={{ height: 12 }}></View>
            <TextInput style={{ borderWidth: 1, borderRadius: 10 }} placeholder="input password" secureTextEntry={true}
                onChangeText={(value) => {
                    setPassword(value);
                }}
            ></TextInput>
            <View style={{ height: 12 }}></View>
            <TouchableOpacity style={{ backgroundColor: 'rgba(119, 193, 145, 0.8)', borderRadius: 18, height: 36, justifyContent: "center", alignItems: 'center' }}
                onPress={() => {
                    console.log(email);
                    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
                    if (reg.test(email) === false) {
                        console.log("Email is Not Correct");
                        return false;
                    }
                    else {
                        auth()
                            .signInWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
                            .then(() => {
                                console.log('User account created & signed in!');
                            })
                            .catch(error => {
                                if (error.code === 'auth/email-already-in-use') {
                                    console.log('That email address is already in use!');
                                }

                                if (error.code === 'auth/invalid-email') {
                                    console.log('That email address is invalid!');
                                }

                                console.error(error);
                            });
                    }
                    console.log(user, password);
                }}
            >
                <Text style={{ fontSize: 16 }}>Login</Text>
            </TouchableOpacity>

            {/* <Image
                // source={require("../../assets/trail-5yOnGsKUNGw-unsplash.jpg")}
                style={{ width: Dimensions.get('screen').width, height: Dimensions.get('screen').height, resizeMode: 'cover' }}
                defaultSource={require("../../assets/trail-5yOnGsKUNGw-unsplash.jpg")}
            ></Image> */}
            {/* <Text>
                login screen 1
            </Text> */}

            {/* <Button title="add value" onPress={() => {
                setValue(value + 1);
            }}></Button> */}

            {/* <Text></Text> */}

            {/* <Button title="call crashlytics" onPress={()=>{
                console.log('crashlytics');
                crashlytics().crash();
            }}></Button> */}

            {/* <Text>{value}</Text>
            <Button title="change title" onPress={() => {
                // setTitle({value: "aaaaaa"});
                setFullName({ name: 'TrungHC', familyName: 'HCT' });
                // setValue(value);
            }}></Button>
            <Text>{title.value}</Text>

            <Text>{fullName.name}</Text>
            <Text>{fullName.familyName}</Text> */}

        </View>
    )
}

export default Login;

// currentUser
// {
//     "displayName":null,
//     "email":"jane.doe@example.com",
//     "emailVerified":false,
//     "isAnonymous":false,
//     "metadata":{
//        "creationTime":1698676501083,
//        "lastSignInTime":1698676501083
//     },
//     "multiFactor":{
//        "enrolledFactors":[
//           "Array"
//        ]
//     },
//     "phoneNumber":null,
//     "photoURL":null,
//     "providerData":[
//        [
//           "Object"
//        ]
//     ],
//     "providerId":"firebase",
//     "tenantId":null,
//     "uid":"wnwXEnEIPFMAjOCYbZq38Yuss532"
//  }