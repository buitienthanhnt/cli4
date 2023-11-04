import React, { useCallback, useEffect, useMemo, useState } from "react";
import { View } from 'react-native';
const CustomNavigation = (props)=>{
    useEffect(()=>{
        console.log(111);
        if (props?.route?.params?.url) {
            props?.navigation.navigate("PaperScreen", { screen: "PaperListCategory", params: { category_id: 3 } })
        }
    }, [])
    return(
        <View></View>
    )
}
export default CustomNavigation;