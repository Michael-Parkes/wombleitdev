import {  Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text } from 'react-native'
const Layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: Colors.wombleGreen,
    }}>
      <Tabs.Screen
        name="home"
        options={{ title: 'Home', tabBarIcon: ({ size, color }) => (
          <FontAwesome name="home" size={size} color={color} />
        ),
      }}
      />
      <Tabs.Screen
        name="search"
        options={{ title: 'Search', tabBarIcon: ({ size, color }) => (
          <FontAwesome name="search" size={size} color={color} />
        ),
      }}
      />
      <Tabs.Screen
        name="sell"
        options={{ title: 'Sell', tabBarIcon: ({ size, color }) => (
          <FontAwesome name="plus-circle" size={size} color={color} />
        ),
      }}
      />
      <Tabs.Screen
        name="inbox"
        options={{ title: 'Inbox', tabBarIcon: ({ size, color }) => (
          <FontAwesome name="inbox" size={size} color={color} />
        ),
      }}
      />
      <Tabs.Screen
        name="account"
        options={{ title: 'Account', tabBarIcon: ({ size, color }) => (
          <FontAwesome name="user-circle" size={size} color={color} />
        ),
      }}
      />
    </Tabs>
  );
};
export default Layout;