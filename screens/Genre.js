import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { urlFor } from '../client';
import { COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';
import {
  ArrowLeftIcon,
  SparklesIcon,
  CheckBadgeIcon,
} from 'react-native-heroicons/solid';
import { RestaurantCard } from '../components';

const Genre = () => {
  const navigation = useNavigation();
  const {
    params: { catImg, catTitle, restaurant, long, short },
  } = useRoute();

  return (
    <ScrollView>
      <View style={{ position: 'relative' }}>
        <Image
          source={{ uri: urlFor(catImg).url() }}
          style={{
            height: 224,
            padding: 16,
            backgroundColor: 'rgb(209,213,219)',
            width: '100%',
          }}
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          style={{
            position: 'absolute',
            left: 20,
            top: 56,
            padding: 8,
            backgroundColor: 'rgb(243,244,246)',
            borderRadius: 9999,
          }}
        >
          <ArrowLeftIcon size={20} color={COLORS.green} />
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: '#fff' }}>
        <View style={{ paddingHorizontal: 16, paddingTop: 14 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 28, fontWeight: '700' }}>{catTitle}</Text>
            <CheckBadgeIcon size={20} color={COLORS.green} />
          </View>

          <Text style={{ color: COLORS.gray, marginTop: 8, paddingBottom: 8 }}>
            {long}
          </Text>
        </View>
      </View>
      <View style={{ paddingBottom: 144 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingTop: 20,
          }}
        >
          <Text
            style={{
              fontWeight: '600',
              fontSize: 20,
            }}
          >
            Restaurants
          </Text>
          <SparklesIcon size={20} color={COLORS.green} marginLeft={5} />
        </View>
        <Text
          style={{
            color: COLORS.gray,
            marginTop: 8,
            paddingBottom: 8,
            paddingHorizontal: 16,
            paddingHorizontal: 16,
          }}
        >
          {short}
        </Text>
        <ScrollView
          horizontal
          contentContainerStyle={{ paddingHorizontal: 15 }}
          showsHorizontalScrollIndicator={false}
          style={{ paddingTop: 16 }}
        >
          {restaurant?.map((item) => (
            <RestaurantCard
              key={item._id}
              id={item._id}
              imgUrl={item.image}
              title={item.name}
              rating={item.rating}
              genre={item.type?.name}
              address={item.address}
              short_desc={item.short_desc}
              dishes={item.dishes}
              long={item.long}
              lat={item.lat}
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Genre;
