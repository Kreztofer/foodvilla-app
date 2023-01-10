import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import { COLORS } from '../constants';
import RestaurantCard from './RestaurantCard';
import client from '../client';

const FeaturedRow = ({ id, title, description }) => {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured" && _id == $id]{
      ...,
      restaurants[]->{
      ...,
      dishes[]->,
      type->{
        name
      }
     }
    }[0]`,
        { id }
      )
      .then((data) => {
        setRestaurant(data?.restaurants);
      });
  }, [id]);

  return (
    <View>
      <View
        style={{
          marginTop: 16,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
        }}
      >
        <Text style={{ fontWeight: '600', fontSize: 18 }}>{title}</Text>
        <ArrowRightIcon size={35} color={COLORS.green} />
      </View>
      <Text style={{ fontSize: 12, color: COLORS.gray, paddingHorizontal: 16 }}>
        {description}
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
  );
};

export default FeaturedRow;
