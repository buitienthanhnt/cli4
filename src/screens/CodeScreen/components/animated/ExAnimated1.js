import {useEffect} from 'react'
import { Button, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { useSharedValue, useAnimatedStyle, withSpring, withTiming, Easing, withRepeat } from 'react-native-reanimated';

const ExAnimated1 = () => {
  const width = useSharedValue(120);
  const height = useSharedValue(60);
  const left = useSharedValue(10);

  const handlePress = () => {
    width.value = withSpring(width.value + 20);
    height.value = withSpring(height.value + 50);
    left.value = withSpring(left.value + 20);
  };

  return (
    <Animated.View
      style={{
        width,
        height: height,
        backgroundColor: 'violet',
        left: left,
        top: 20
      }}
    >
      <Button onPress={handlePress} title="Click me" />
    </Animated.View>
  );
}

const ExAnimated2 = () => {
  const translateX = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value * 2) }],
  }));

  return (
    <View>
      <Animated.View
        style={[{
          width: 60, height: 60, backgroundColor: 'violet',
        }, animatedStyles]}
      >
      </Animated.View>

      <TouchableOpacity onPress={() => {
        translateX.value = withSpring(translateX.value + 30)
      }}>
        <Text>on click</Text>
      </TouchableOpacity>
    </View>
  )
}

const duration = 2000;

export function ExAnimated3() {
  const defaultAnim = useSharedValue(200);
  const linear = useSharedValue(200);

  const animatedDefault = useAnimatedStyle(() => ({
    transform: [{ translateX: defaultAnim.value }],
  }));
  const animatedChanged = useAnimatedStyle(() => ({
    transform: [{ translateX: linear.value }],
  }));

  useEffect(() => {
    linear.value = withRepeat(
      // highlight-next-line
      withTiming(-linear.value, {
        duration,
        easing: Easing.linear,
      }),
      -1,
      true
    );
    defaultAnim.value = withRepeat(
      // highlight-next-line
      withTiming(-defaultAnim.value, {
        duration,
      }),
      -1,
      true
    );
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedDefault]}>
        <Text style={styles.text}>inout</Text>
      </Animated.View>
      <Animated.View style={[styles.box, animatedChanged]}>
        <Text style={styles.text}>linear</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  box: {
    height: 80,
    width: 80,
    margin: 20,
    borderWidth: 1,
    borderColor: '#b58df1',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#b58df1',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});


export { ExAnimated1, ExAnimated2 };
// =========================================================
// useSharedValue: là 1 hook để tham chiếu giá trị cho hiệu ứng(đây là yêu cầu bắt buộc cho việc lưu và cập nhập giá trị thuộc tính.)
// withSpring: là 1 dạng hiệu ứng để chi phối giá trị cập nhập.


// https://www.w3schools.com/css/css3_2dtransforms.asp
// https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateX