import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { selectRestaurant } from '../features/restaurantSlice';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from '../features/basketSlice';
import { COLORS, SHADOWS } from '../constants';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../client';
import Currency from 'react-currency-formatter';

const Basket = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const [groupedItems, setGroupedItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const grouped = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItems(grouped);
  }, [items]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, backgroundColor: 'rgb(243,244,246)' }}>
        <View
          style={{
            padding: 20,
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderColor: 'rgba(0,204,187,.3)',
            ...SHADOWS.light,
          }}
        >
          <View>
            <Text
              style={{ fontSize: 18, fontWeight: '600', textAlign: 'center' }}
            >
              Basket
            </Text>
            <Text style={{ textAlign: 'center', color: COLORS.gray }}>
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              backgroundColor: 'rgb(243,244,246)',
              borderRadius: 9999,
            }}
            onPress={navigation.goBack}
          >
            <XCircleIcon color={COLORS.green} height={40} width={40} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingVertical: 12,
            backgroundColor: '#fff',
            marginVertical: 20,
          }}
        >
          <Image
            source={{ uri: 'https://links.papareact.com/wru' }}
            style={{
              height: 28,
              width: 28,
              backgroundColor: 'rgb(209,213,219)',
              borderRadius: 9999,
              padding: 16,
            }}
          />
          <Text style={{ flex: 1, marginLeft: 16 }}>Deliver in 50-75 mins</Text>
          <TouchableOpacity>
            <Text style={{ color: COLORS.green }}>Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {Object.entries(groupedItems).map(([key, items]) => (
            <View
              key={key}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#fff',
                paddingVertical: 8,
                paddingHorizontal: 20,
              }}
            >
              <Text style={{ color: COLORS.green }}>{items.length} x</Text>
              <Image
                style={{
                  height: 48,
                  width: 48,
                  borderRadius: 9999,
                  marginHorizontal: 12,
                }}
                source={{ uri: urlFor(items[0]?.image).url() }}
              />
              <Text style={{ flex: 1 }}>{items[0]?.name}</Text>

              <Text style={{ color: 'rgb(75,85,99)' }}>
                <Currency quantity={items[0]?.price} currency="NGN" />
              </Text>

              <TouchableOpacity>
                <Text
                  className="text-xs"
                  style={{ color: COLORS.green, fontSize: 12, marginLeft: 12 }}
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View style={{ padding: 20, backgroundColor: '#fff', marginTop: 20 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ color: COLORS.gray }}>Subtotal</Text>
            <Text style={{ color: COLORS.gray }}>
              <Currency quantity={basketTotal} currency="NGN" />
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 16,
            }}
          >
            <Text style={{ color: COLORS.gray }}>Delivery Fee</Text>
            <Text style={{ color: COLORS.gray }}>
              <Currency quantity={5.99} currency="NGN" />
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 16,
            }}
          >
            <Text>Order Total</Text>
            <Text style={{ fontWeight: '600' }}>
              <Currency quantity={basketTotal + 5.99} currency="NGN" />
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.green,
              marginHorizontal: 20,
              padding: 16,
              borderRadius: 8,
              marginVertical: 20,
            }}
          >
            <Text
              onPress={() => navigation.navigate('Order')}
              style={{
                fontSize: 18,
                color: 'white',
                fontWeight: '600',
                textAlign: 'center',
              }}
            >
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Basket;
