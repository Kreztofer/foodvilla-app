import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Navbar, SearchBar } from '../components';
import { useNavigation } from '@react-navigation/native';
import { COLORS, assets, SIZES } from '../constants';

const Search = () => {
  return (
    <ScrollView style={{ paddingHorizontal: 12 }}>
      <Text
        style={{
          textAlign: 'center',
          marginVertical: 20,
          fontWeight: '600',
          fontSize: SIZES.large,
        }}
      >
        Search
      </Text>
      <SearchBar />
    </ScrollView>
  );
};

export default Search;
