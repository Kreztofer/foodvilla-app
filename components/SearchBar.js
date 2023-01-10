import { View, TextInput } from 'react-native';
import React from 'react';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

const SearchBar = () => {
  const navigation = useNavigation();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigation.navigate('Search');
  };
  return (
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
        onSubmitEditing={handleSubmit}
      />
    </View>
  );
};

export default SearchBar;
