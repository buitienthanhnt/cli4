import { useCallback, useState } from 'react';
import { Button, Dimensions, Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'; // https://github.com/react-native-image-picker/react-native-image-picker
import Config from '@config/Config';
import axios from 'axios';
import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';

import "react-native-get-random-values"; // yarn add react-native-get-random-values đi kèm với uuid nếu không uuid sẽ có thể bị lỗi.
import { v4 as uuidv4 } from 'uuid';     // yarn add uuid https://github.com/uuidjs/uuid hoặc: yarn add @types/uuid -D (cho typeScript)

const ExUploadImg = () => {
    const [image, setImage] = useState([]);

    /**
     * chọn ảnh từ thư viện ảnh trên mobile
     */
    const pickImage = useCallback(async () => {
        // No permissions request is necessary for launching the image library
        let result = await launchImageLibrary({
            mediaTypes: 'photo',
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            selectionLimit: 4
        });
        // {
        //     "assets": [
        //         {
        //         "fileName": "1000000019.jpg", "fileSize": 137178, "height": 1872, 
        //         "originalPath": "/sdcard/.transforms/synthetic/picker/0/com.android.providers.media.photopicker/media/1000000019.jpg", 
        //         "type": "image/png", 
        //         "uri": "file:///data/user/0/com.cli4/cache/rn_image_picker_lib_temp_666e8102-0351-4bff-aca3-a285ce6198e8.png", 
        //         "width": 864
        //          }
        //      ]
        // }

        if (!result.didCancel) {
            const target_image = [];
            result?.assets.map((imageItem, index) => {
                target_image.push(imageItem?.uri);
            })
            setImage(target_image);
        }
    }, []);

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
                url: Config.custom_url() + Config.api_request.uploadImageMb,
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

    /**
     * image_path: là đường dẫn ảnh trong thiết bị(không phải http://).
     * upload into storage of firebase.
     */
    const storageUploadItem = useCallback(async (image_path) => {
        let img = '';
        const imageName = uuidv4();
        // tham chiếu tới đối tượng ảnh chuẩn bị upload.
        const reference = storage().ref('/demo/' + imageName);
        // uploads file
        await reference.putFile(image_path);
        // task = reference.putFile(image_path);
        // task.on('state_changed', taskSnapshot => {
        // console.log('___taskSnapshot', taskSnapshot.metadata);
        // "metadata": {
        //     "bucket": "react-cli4.appspot.com", "contentDisposition": "inline; filename*=utf-8''d69f0a14-9700-4ecb-a6c4-131be88edd7a", 
        //     "contentEncoding": "identity", "contentType": "image/png", 
        //     "fullPath": "demo/d69f0a14-9700-4ecb-a6c4-131be88edd7a", "generation": "1701145165411082", 
        //     "md5Hash": "l7jCVfY7tO0eWTpXgr61zQ==", "metageneration": "1", 
        //     "name": "d69f0a14-9700-4ecb-a6c4-131be88edd7a", 
        //     "size": 155204, "timeCreated": "2023-11-28T04:19:25Z", 
        //     "updated": "2023-11-28T04:19:25Z"}, 
        //     "state": "success", 
        //     "totalBytes": 155204
        // }
        // });
        // task.then(async (onFulfilled, onRejected) => {
        // lấy link của ảnh sau upload:
        // https://firebasestorage.googleapis.com/v0/b/react-cli4.appspot.com/o/demo%2F552360c8-7ab5-4d63-a196-3d4505b4dcaf?alt=media&token=ec925e45-00e1-4984-b61a-f0deb177155a
        // const image_url = await reference.getDownloadURL();
        // console.log('', onFulfilled, image_url);
        // });
        // lấy đường dẫn ảnh https uri
        img = await reference.getDownloadURL();
        return img;
    }, []);

    /**
     * upload multi image into storege firebase.
     */
    const storageUploadImages = useCallback(async () => {
        let resultData = [];
        if (image.length) {
            // không dùng với map:
            // image.map(async(item)=>{
            //     const res_uri = await storageUploadItem(item);
            //     console.log('___', res_uri);
            //     resultData.push(res_uri);
            // });

            // dùng qua for để bắt await với vòng lặp.
            for (let index = 0; index < image.length; index++) {
                const res_uri = await storageUploadItem(image[index]);
                if (res_uri) {
                    resultData.push({
                        url: res_uri,
                        meta: { type: '' }
                    });
                }
            }
            console.log(resultData);
            return resultData;
        }
        console.log('not image');
        return [];
    }, []);

    return (
        <View style={{ padding: 10 }}>
            <View style={{ gap: 20 }}>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'rgba(148,74,228,0.8)', height: 32, justifyContent: 'center',
                            alignItems: 'center', width: 220, borderRadius: 40
                        }}
                        onPress={pickImage}
                    >
                        <Text>Pick an image from camera</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    horizontal={true}
                    // pagingEnabled={true} 
                    style={{ height: 160, }}
                    showsHorizontalScrollIndicator={false}
                >
                    {image.map((item, index) => {
                        return (
                            <View key={'imageT_' + index}>
                                <Image
                                    source={{ uri: item }}
                                    style={{ width: 120, height: 120, marginHorizontal: 8 }}
                                    borderRadius={16}
                                    key={'image_' + index} resizeMode='cover' />
                                <TouchableOpacity style={{ position: 'absolute', left: 20, top: 5 }}
                                    onPress={() => {
                                        console.log(index);
                                        let target_image = image;
                                        target_image.splice(index, 1);
                                        setImage([...target_image]);
                                    }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>X</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
            <View style={{ backgroundColor: "black", height: 1, marginVertical: 10 }}></View>

            {/* ========================upload into laravel server================================== */}
            <View>
                <Text style={{ color: '#ff8cf9', fontSize: 18, fontWeight: '500' }}>for laravel services: </Text>
                <Button title="submit" onPress={() => {
                    up_load_image(image[0]);
                }}></Button>
            </View>
            {/* ========================upload in to laravel server================================== */}
            <View style={{ backgroundColor: "black", height: 1, marginVertical: 10 }}></View>
            {/* ========================upload into storage firebase================================== */}
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#9389ff', fontSize: 18, fontWeight: '500' }}>for firebase application: </Text>
                <TouchableOpacity
                    style={{ backgroundColor: '#afffe0', height: 32, justifyContent: 'center', alignItems: 'center', width: 160, borderRadius: 40 }}
                    onPress={async () => {
                        storageUploadImages();
                    }}
                >
                    <Text>upload to firebase</Text>
                </TouchableOpacity>
            </View>
            {/* ========================upload into storage firebase================================== */}
        </View>
    );
}

export default ExUploadImg;