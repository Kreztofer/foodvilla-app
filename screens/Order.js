import { View, Text, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import { COLORS } from '../constants';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const Order = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => navigation.navigate('Delivery'), 3000);
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Animatable.Image
        source={require('../assets/loading.gif')}
        animation="slideInUp"
        iterationCount={1}
        style={{ width: 384, height: 384 }}
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        style={{
          fontSize: 18,
          marginBottom: 40,
          marginTop: 20,
          fontWeight: '600',
          textAlign: 'center',
          color: COLORS.green,
        }}
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={70} indeterminate={true} color={COLORS.green} />
    </SafeAreaView>
  );
};

export default Order;
