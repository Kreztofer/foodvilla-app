import { View, Text, Image } from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { assets, COLORS } from '../constants';
import {
  PhoneIcon,
  QuestionMarkCircleIcon,
  UserIcon,
  Cog6ToothIcon,
  BookOpenIcon,
  IdentificationIcon,
} from 'react-native-heroicons/solid';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        height: '100%',
        marginLeft: 10,
      }}
    >
      <View style={{ flex: 1 }}>
        <View style={{ marginBottom: 100 }}>
          <Image
            source={assets.logo}
            resizeMode="contain"
            style={{
              height: 80,
              width: 80,
              backgroundColor: 'rgb(209,213,219)',
              borderRadius: 9999,
              padding: 16,
            }}
          />
          <Text style={{ fontSize: 20, fontWeight: '600', marginTop: 8 }}>
            👋 Dominic Amalu
          </Text>
        </View>

        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: 30,
              alignItems: 'center',
            }}
          >
            <UserIcon size={20} color={COLORS.green} />
            <Text style={{ fontSize: 16, marginLeft: 10 }}>Account</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: 30,
              alignItems: 'center',
            }}
          >
            <BookOpenIcon size={20} color={COLORS.green} />
            <Text style={{ fontSize: 16, marginLeft: 10 }}>Address Book</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: 30,
              alignItems: 'center',
            }}
          >
            <QuestionMarkCircleIcon size={20} color={COLORS.green} />
            <Text style={{ fontSize: 16, marginLeft: 10 }}>F.A.Q</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: 30,
              alignItems: 'center',
            }}
          >
            <IdentificationIcon size={20} color={COLORS.green} />
            <Text style={{ fontSize: 16, marginLeft: 10 }}>About</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: 30,
              alignItems: 'center',
            }}
          >
            <Cog6ToothIcon size={20} color={COLORS.green} />
            <Text style={{ fontSize: 16, marginLeft: 10 }}>Settings</Text>
          </View>
        </View>
      </View>
      <Text style={{ color: COLORS.gray, marginBottom: 10 }}>
        © Dominicua.com All rights reserved.
      </Text>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
