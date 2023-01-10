import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { useNavigation } from '@react-navigation/native';
import Currency from 'react-currency-formatter';
import { COLORS } from '../constants';

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;
  return (
    <View
      style={{ position: 'absolute', bottom: 40, width: '100%', zIndex: 50 }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate('Basket')}
        style={{
          backgroundColor: COLORS.green,
          marginHorizontal: 20,
          padding: 16,
          flexDirection: 'row',
          borderRadius: 8,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: '600',
            backgroundColor: '#01A296',
            paddingVertical: 4,
            paddingHorizontal: 8,
            borderRadius: 4,
          }}
        >
          {items.length}
        </Text>
        <Text
          style={{
            flex: 1,
            color: 'white',
            fontSize: 18,
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          View Basket
        </Text>
        <Text style={{ fontSize: 18, color: 'white', fontWeight: '600' }}>
          <Currency quantity={basketTotal} currency="NGN" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
