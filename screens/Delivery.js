import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { COLORS, SHADOWS } from '../constants';
import { XMarkIcon } from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress';
import Mapview, { Marker } from 'react-native-maps';

const Delivery = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <View
      style={{
        backgroundColor: COLORS.green,
        flex: 1,
      }}
    >
      <SafeAreaView style={{ zIndex: 50 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: '300', color: 'white' }}>
            Order Help
          </Text>
        </View>

        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 8,
            borderRadius: 6,
            zIndex: 50,
            ...SHADOWS.medium,
            backgroundColor: 'white',
            padding: 24,
          }}
        >
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <View>
              <Text style={{ fontSize: 18, color: COLORS.gray }}>
                Estimated Arrival
              </Text>
              <Text style={{ fontSize: 36, fontWeight: '600' }}>
                45-55 Minutes
              </Text>
            </View>
            <Image
              source={{ uri: 'https://links.papareact.com/fls' }}
              style={{ height: 80, width: 80 }}
            />
          </View>
          <Progress.Bar size={30} color={COLORS.green} indeterminate={true} />
          <Text style={{ marginTop: 12, color: COLORS.gray }}>
            Your order is being prepared...
          </Text>
        </View>
      </SafeAreaView>
      <Mapview
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={{ flex: 1, marginTop: -40, zIndex: 0 }}
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_desc}
          identifier="origin"
          pinColor={COLORS.green}
        />
      </Mapview>
      <SafeAreaView
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          height: 124,
        }}
      >
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          style={{
            height: 48,
            width: 48,
            backgroundColor: 'rgb(209,213,219)',
            borderRadius: 9999,
            padding: 16,
            marginLeft: 20,
          }}
        />
        <View style={{ flex: 1, marginLeft: 20 }}>
          <Text style={{ fontSize: 18 }}>Dominicua</Text>
          <Text style={{ color: COLORS.gray }}>Your Rider </Text>
        </View>
        <Text
          style={{
            marginRight: 20,
            fontSize: 18,
            fontWeight: '600',
            color: COLORS.green,
          }}
        >
          Call
        </Text>
      </SafeAreaView>
    </View>
  );
};

export default Delivery;
