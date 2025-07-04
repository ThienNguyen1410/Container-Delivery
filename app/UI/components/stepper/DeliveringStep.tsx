import React, {useEffect} from 'react';
import {Text, View, Animated} from 'react-native';
import {StepProps} from './steps.prop';
import {styles} from './styles';
import * as Animatable from 'react-native-animatable';
import {translate} from '@component/language';
/**
 * Order status component
 * Delivering order step
 */
export const DeliveringStep = (props: StepProps) => {
  const animateValue = new Animated.Value(0);
  const inputRange = [0, 1];
  const outputRange = ['0%', '100%'];
  const animateHeight = animateValue.interpolate({inputRange, outputRange});

  useEffect(() => {
    Animated.timing(animateValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  });

  return (
    <Animatable.View animation="fadeInLeft" style={styles.timelineContainer}>
      <View style={styles.flexHorizontal}>
        <View style={styles.flexTwoQuarter}>
          <Text style={styles.time_text}>{props.date}</Text>
          <Text style={styles.time_text}>{props.time}</Text>
        </View>
        <View style={styles.flexOneQuarters}>
          <View style={[styles.circle, {backgroundColor: props.circleColor}]}>
            {props.children}
          </View>
          <View style={styles.flexOneHalf}>
            {props.disableLine ? (
              <View />
            ) : (
              <Animated.View
                style={{
                  width: 1.5,
                  backgroundColor: props.lineColor,
                  height: animateHeight,
                }}
              />
            )}
          </View>
        </View>
        <View style={styles.flexFourthQuarter}>
          <Text style={styles.time_text}>{translate('state.delivering')}</Text>
        </View>
      </View>
    </Animatable.View>
  );
};
