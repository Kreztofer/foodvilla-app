import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { COLORS, SIZES, assets } from '../constants';
import FocusedStatusBar from '../components/FocusedStatusBar';
import { FeaturedRow, Category } from '../components';
import client from '../client';
import { useNavigation } from '@react-navigation/native';

import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  Bars4Icon,
} from 'react-native-heroicons/outline';

const Home = ({ props }) => {
  const navigation = useNavigation();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured"] {
    ...,
  restaurants[]->{
    ...,
    dishes[]->
  }
}`
      )
      .then((data) => {
        setFeatured(data);
      });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <FocusedStatusBar background={COLORS.primary} />

      <View
        style={{
          flexDirection: 'row',
          paddingBottom: 12,
          alignItems: 'center',
          marginTop: 12,
          paddingHorizontal: 12,
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{
            height: 28,
            width: 28,
            backgroundColor: 'rgb(209,213,219)',
            borderRadius: 9999,
            padding: 16,
          }}
        />
        <View style={{ flex: 1, marginLeft: 8 }}>
          <Text
            style={{
              fontSize: SIZES.font,
              color: COLORS.gray,
            }}
          >
            Deliver Now!
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontWeight: '600', fontSize: SIZES.large }}>
              Current Location
            </Text>
            <ChevronDownIcon size={20} color={COLORS.green} />
          </View>
        </View>
        {/* <UserIcon size={35} color={COLORS.green} /> */}
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Bars4Icon size={35} color={COLORS.green} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 8,
          marginRight: 12,
          paddingBottom: 8,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            backgroundColor: 'rgb(229,231,235)',
            alignItems: 'center',
            padding: 12,
          }}
        >
          <MagnifyingGlassIcon size={20} color="gray" marginRight={20} />
          <TextInput
            placeholder="Restaurants and cuisines....."
            keyboardType="default"
            // onSubmitEditing={handleSubmit}
          />
        </View>
      </View>
      <ScrollView
        style={{ backgroundColor: 'rgb(243,244,246)' }}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Category />

        {featured?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_desc}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
