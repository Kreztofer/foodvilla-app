import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import CategoryCard from './CategoryCard';
import client from '../client';
import { urlFor } from '../client';

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "category"]{
          ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{
          name
        }
      },
    }`
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories?.map((category, i) => (
        <CategoryCard
          key={category._id}
          id={category._id}
          imgUrl={urlFor(category.image).url()}
          title={category.name}
          long={category.longDesc}
          short={category.shortDesc}
          restaurant={category.restaurants}
        />
      ))}
    </ScrollView>
  );
};

export default Category;
