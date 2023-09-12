import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
  Clipboard,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

class ScanScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  onSuccess = e => {
    // console.log(e);
    this.setState({ value: e.data });
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err)
    // );
  };

  saveQrValue = async ()=>{
    await Clipboard.setString(this.state.value);
    alert("coppied value: " + this.state.value);
  }

  render() {
    if (this.state.value) {
      return (
        <View style={{flexDirection: 'row', padding: 10}}>
          <Text  style={{ marginRight: 10 }}>Qr value: {this.state.value}</Text>
          <TouchableOpacity onPress={this.saveQrValue}>
            <FontAwesome5Icon name='copy' size={28} color='tomato' />
          </TouchableOpacity>
        </View>
      )
    }
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

export default ScanScreen;
// AppRegistry.registerComponent('default', () => ScanScreen);