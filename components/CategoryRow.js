import { View, Text, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import client from '../client';

const CategoryRow = ({ catImg, catTitle, restaurant, long, short }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Genre', {
          catImg,
          catTitle,
          restaurant,
          long,
          short,
        });
      }}
      style={{ position: 'relative', marginRight: 8 }}
    >
      <Image
        source={{ uri: catImg }}
        style={{
          height: 80,
          width: 80,
          borderRadius: 4,
        }}
      />
      <Text
        style={{
          position: 'absolute',
          bottom: 4,
          left: 4,
          color: 'white',
          fontWeight: '700',
        }}
      >
        {catTitle}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryRow;
