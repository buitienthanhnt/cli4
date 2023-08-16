import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Text, View } from "react-native";

const Login = (props) => {

    const [value, setValue] = useState(0);
    const [fullName, setFullName] = useState({name: 'name', familyName: 'family'});
    const [title,setTitle] = useState({value: 'useEffect() i a Hooks'});

    // useEffect gọi khi có sư thay đổi trong component
    // setState() nếu là 1 object thì sẽ luôn luôn là thay đổi(nên sẽ gọi: useEffect)(object không đại diện cho các giá trị trong nó) cho nên thông thường cần lắng nghe 1 giá trị cụ thể trong đó, 
    // nếu là 1 value đơn thì sẽ thay đổi khi value thực thay đổi cho nên sẽ gọi useEffect khi giá trị thực thay đổi. 
    // nếu để  dependence là: [] sẽ chỉ gọi 1 lần duy nhất.
    useEffect(()=>{
        console.log("=======>", title);
        // setFullName({name:'TrungHC',familyName: 'HCT'});
        // setValue(value+1);
        // setTitle({value: "bbbbbbbbbbbbb"});
    }, [title, value, fullName]) // dependence phải lắng nghe giá trị cụ thể còn dạng object: {} sẽ không được vì 1 object có thể có nhiều thuộc tính và nó không liên quan. 

    // hàm tính: trả về giá trị cụ thể dựa vào lần tính trước đó.
    // nó sẽ lắng nghe có sự thay đổi để xác định xem có thực hiện tính toán lại hay không. Nếu không sẽ trả về  value luôn mà không cần tính toán lại. 
    useMemo(()=>{
        // các phần xử lý trước để trả về giá trị.
        return {
            value: "opopopo"
        };
    }, [value]);

    useCallback(()=>{

    }, []);
    
    return (
        <View>
            <Text>
                login screen 1
            </Text>

            <Button title="add value" onPress={()=>{
                setValue(value+1);
            }}></Button>



            <Text>{value}</Text>
            <Button title="change title" onPress={()=>{
                // setTitle({value: "aaaaaa"});
                setFullName({name:'TrungHC',familyName: 'HCT'});
                // setValue(value);
            }}></Button>
            <Text>{title.value}</Text>

            <Text>{fullName.name}</Text>
            <Text>{fullName.familyName}</Text>

        </View>
    )
}

export default Login;