import React from 'react';
import { Tabs } from 'expo-router';
import { View, Pressable, Platform } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

const CustomTabBarButton = (props: BottomTabBarButtonProps) => {
  const { children, onPress, style } = props;

  return (
    <Pressable onPress={onPress} style={[style,
        { 
          top: -35,
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}>

      <View className="w-24 h-24 bg-[#3EB489] rounded-full items-center justify-center border-[4px] border-white"
        style={Platform.select({
          ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
          },
          android: {
            elevation: 8,
          },
        })}>
        <MaterialCommunityIcons  name="washing-machine" size={45} color="white" />
      </View>
    </Pressable>
  );
};

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false,
        tabBarActiveTintColor: '#2D1F47',
        tabBarInactiveTintColor: '#94a3b8',
        tabBarStyle: {
          display: 'flex',
          flexDirection: 'row',
          paddingTop: 15,
          position: 'absolute',
          height: 70,
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
          elevation: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -10 },
          shadowOpacity: 0.09,
          shadowRadius: 8,
        },
      }}>

      <Tabs.Screen  name="index" options={{ title: 'Home', headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="home-sharp" size={25} color={color}  />,
        }}/>

      <Tabs.Screen name="profile" options={{ title: 'Profile', headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="person-sharp" size={25} color={color}  />,
        }}/>

      <Tabs.Screen name="create-order" options={{ headerShown: false,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}/>

      <Tabs.Screen name="history" options={{ headerShown: false, title: 'History',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="history" size={27} color={color} />,
        }}/>

      <Tabs.Screen name="settings" options={{ title: 'Settings', headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="settings-sharp" size={25} color={color} />,
        }}/>

      <Tabs.Screen name='history/[id]' options={{title: 'Detail Id', href: null}}/>
    </Tabs>
  );
}