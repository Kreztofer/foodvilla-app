import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { urlFor } from '../client';
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
} from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import { COLORS, SHADOWS } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { BasketIcon, DishRow } from '../components';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';

const Details = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    params: {
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
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    );
  }, [dispatch]);

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View style={{ position: 'relative' }}>
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
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
            <Text style={{ fontSize: 28, fontWeight: '700' }}>{title}</Text>
            <View style={{ flexDirection: 'row', marginVertical: 4 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <StarIcon color={COLORS.green} opacity={0.5} size={22} />
                <Text
                  style={{ color: COLORS.gray, marginLeft: 3, opacity: 0.8 }}
                >
                  {rating} . {genre}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 6,
                }}
              >
                <MapPinIcon color={COLORS.green} opacity={0.5} size={22} />
                <Text
                  style={{ color: COLORS.gray, marginLeft: 3, opacity: 0.8 }}
                >
                  Nearby . {address}
                </Text>
              </View>
            </View>

            <Text
              style={{ color: COLORS.gray, marginTop: 8, paddingBottom: 8 }}
            >
              {short_desc}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 20,
              borderBottomWidth: 1,
              borderTopWidth: 1,
              borderColor: 'rgba(209,213,219,.4)',
            }}
          >
            <QuestionMarkCircleIcon
              color={COLORS.gray}
              opacity={0.5}
              size={22}
            />
            <Text style={{ paddingLeft: 4, flex: 1, fontWeight: '600' }}>
              Have a food allergy?
            </Text>
            <ChevronRightIcon color={COLORS.green} opacity={0.5} size={22} />
          </TouchableOpacity>
        </View>
        <View style={{ paddingBottom: 144 }}>
          <Text
            style={{
              paddingHorizontal: 16,
              paddingTop: 20,
              fontWeight: '600',
              fontSize: 20,
              marginBottom: 12,
            }}
          >
            Menu
          </Text>
          {dishes?.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_desc}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Details;
