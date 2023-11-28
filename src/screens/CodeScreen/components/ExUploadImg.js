import {useState} from 'react';
import { Button, Dimensions, Text, View } from "react-native";
import FastImage from 'react-native-fast-image';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'; // https://github.com/react-native-image-picker/react-native-image-picker
import Config from '@config/Config';
import axios from 'axios';

const ExUploadImg = ()=>{
    const [image, setImage] = useState(null);
    const [path, setPath] = useState(null);

    /**
     * chọn ảnh từ thư viện ảnh trên mobile
     */
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await launchImageLibrary({
            mediaTypes: 'photo',
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        // {
        //     "assets": [
        //         {"fileName": "1000000019.jpg", "fileSize": 137178, "height": 1872, 
        //         "originalPath": "/sdcard/.transforms/synthetic/picker/0/com.android.providers.media.photopicker/media/1000000019.jpg", 
        //         "type": "image/png", 
        //         "uri": "file:///data/user/0/com.cli4/cache/rn_image_picker_lib_temp_666e8102-0351-4bff-aca3-a285ce6198e8.png", 
        //         "width": 864
        //     }]
        // }
        if (!result.didCancel) {
            // console.log(result.assets[0]);
            setImage(result.assets[0].uri);
            setPath(result.assets[0].uri);
        }
    };

    /**
     * upload image to laravel server
     */
    const up_load_image = async (image = null) => {
        if (image) {
            const formData = new FormData();
            formData.append("upload_file", { // getfrom:$_FILES["upload_file"]
                uri: image,
                type: "image/png",
                name: image,
            });
            formData.append("username", "tha nan"); // get from request

            const config = {
                method: "post",
                url: Config.custom_url()+Config.api_request.uploadImageMb,
                responseType: "json",
                headers: {
                    'Content-Type': 'multipart/form-data',
                    // if backend supports u can use gzip request encoding
                    // "Content-Encoding": "gzip",
                },
                transformRequest: (data, headers) => {
                    // !!! override data to return formData
                    // since axios converts that to string
                    return formData;
                },
                onUploadProgress: (progressEvent) => {
                    // use upload data, since it's an upload progress
                    // iOS: {"isTrusted": false, "lengthComputable": true, "loaded": 123, "total": 98902}
                },
                data: formData,
            };

            const result = await axios.request(config);
            // console.log(result.data); // response data cua axios laf result.data(neu dung fecth phai 2 lan await)
            // {
            //     "code": 200, 
            //     "path": {
            //         "file_name": "5472-KlSoVoBs-rn_image_picker_lib_temp_f73ed9de-4a77-4d68-af83-f8f197ce1e65.png", 
            //         "file_path": "storage/images/cli4Mb/5472-KlSoVoBs-rn_image_picker_lib_temp_f73ed9de-4a77-4d68-af83-f8f197ce1e65.png", 
            //         "file_url": "http://192.168.100.156/newpaper/public/storage/images/cli4Mb/5472-KlSoVoBs-rn_image_picker_lib_temp_f73ed9de-4a77-4d68-af83-f8f197ce1e65.png", 
            //         "resize_name": "HKdPEFnjPOS15472-KlSoVoBs-rn_image_picker_lib_temp_f73ed9de-4a77-4d68-af83-f8f197ce1e65.png", 
            //         "resize_path": "storage/images/resize/cli4Mb/HKdPEFnjPOS15472-KlSoVoBs-rn_image_picker_lib_temp_f73ed9de-4a77-4d68-af83-f8f197ce1e65.png", 
            //         "resize_url": "http://192.168.100.156/newpaper/public/storage/images/resize/cli4Mb/HKdPEFnjPOS15472-KlSoVoBs-rn_image_picker_lib_temp_f73ed9de-4a77-4d68-af83-f8f197ce1e65.png"
            //     }
            // }
            return result.data;
        }
        return false;
    }

    // https://sohanews.sohacdn.com/zoom/540_340/160588918557773824/2023/11/27/photo1701093722329-1701093722412636328240.jpg
    return(
        <View>
        <Text>{path}</Text>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        <Text></Text>
        <Button title="submit" onPress={() => {
            up_load_image(image);
        }}></Button>

        {image && <FastImage source={{ uri: image}} style={{ width: Dimensions.get("screen").width, height: 200 }} />}
        
        <Text></Text>
        <View style={{ backgroundColor: "black", height: 1 }}></View>
    </View>
    );
}

export default ExUploadImg;