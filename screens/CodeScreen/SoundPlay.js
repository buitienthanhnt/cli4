import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import dings from '../../assets/titanium-170190.mp3';
import Icon from 'react-native-vector-icons/FontAwesome';

var Sound = require('react-native-sound'); // https://blog.logrocket.com/how-to-play-sounds-in-react-native-using-react-native-sound/#adding-sounds-to-your-react-native-app

Sound.setCategory('Playback');

var ding = new Sound(dings, error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // if loaded successfully
  console.log(
    'duration in seconds: ' +
      ding.getDuration() +
      'number of channels: ' +
      ding.getNumberOfChannels(),
  );
});
const SoundPlay = () => {
	const [play, setPlay] = useState(false);
  useEffect(() => {
    ding.setVolume(3);
    return () => {
      ding.release();
    };
  }, []);
  const playPause = () => {
    if (!play) {
		ding.play(success => {
			setPlay(true)
			if (success) {
			  console.log('successfully finished playing');
			} else {
			  console.log('playback failed due to audio decoding errors');
			}
		  });
	}else{
		ding.pause();
		setPlay(false)
	}
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.playBtn} onPress={playPause}>
	  	<Icon name='arrow-circle-right' size={28} color='white' />
      </TouchableOpacity>

	  <TouchableOpacity style={styles.playBtn} onPress={()=>{
		ding.pause();
	  }}>
	  	<Icon name='arrow-circle-left' size={28} color='white' />
      </TouchableOpacity>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  playBtn: {
    padding: 20,
  },
});
export default SoundPlay;
