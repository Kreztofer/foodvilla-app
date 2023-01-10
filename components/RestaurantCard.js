import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/solid';
import { COLORS, SHADOWS } from '../constants';
import { urlFor } from '../client';
import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_desc,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Details', {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_desc,
          dishes,
          long,
          lat,
        });
      }}
      style={{ backgroundColor: 'white', marginRight: 12, ...SHADOWS.light }}
    >
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        style={{ height: 144, width: 256, borderRadius: 2 }}
      />
      <View style={{ paddingHorizontal: 12, paddingBottom: 16 }}>
        <Text style={{ fontWeight: '700', fontSize: 18, paddingTop: 8 }}>
          {title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <StarIcon size={22} color={COLORS.green} opacity={0.5} />
          <Text style={{ color: COLORS.gray, marginLeft: 3 }}>
            {rating} . {genre}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MapPinIcon size={22} color={COLORS.gray} opacity={0.5} />
          <Text style={{ fontSize: 12, color: COLORS.gray }}>
            Nearby . {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
