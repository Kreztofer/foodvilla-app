import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../constants';
import Currency from 'react-currency-formatter';
import { urlFor } from '../client';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from '../features/basketSlice';

const DishRow = ({ id, name, description, price, image }) => {
  const [pressed, setPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemsWithId(state, id));

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };
  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setPressed(!pressed)}
        style={{
          backgroundColor: 'white',
          padding: 16,
          borderTopWidth: 1,
          borderColor: 'rgba(209,213,219,.4)',
        }}
        borderBottomWidth={pressed ? 1 : 0}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1, paddingRight: 8 }}>
            <Text style={{ fontSize: 18, marginBottom: 4 }}>{name}</Text>
            <Text style={{ color: COLORS.gray }}>{description}</Text>
            <Text style={{ color: COLORS.gray, marginTop: 8 }}>
              <Currency quantity={price} currency="NGN" />
            </Text>
          </View>

          <View>
            <Image
              source={{ uri: urlFor(image).url() }}
              style={{
                padding: 16,
                height: 80,
                width: 80,
                backgroundColor: COLORS.gray,
                borderWidth: 1,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
      {pressed && (
        <View style={{ backgroundColor: 'white', paddingHorizontal: 16 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: 12,
            }}
          >
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemFromBasket}
            >
              <MinusCircleIcon
                size={40}
                color={items.length > 0 ? COLORS.green : 'gray'}
              />
            </TouchableOpacity>
            <Text style={{ marginHorizontal: 4 }}>{items.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color={COLORS.green} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
