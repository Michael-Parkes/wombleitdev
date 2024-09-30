import {  Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text } from 'react-native'
import CustomHeader from '@/components/CustomHeader';
const Layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: Colors.wombleGreen,
      tabBarInactiveBackgroundColor: Colors.background,
      tabBarActiveBackgroundColor: Colors.background
    }}>
      <Tabs.Screen
        name="home"
        options={{ title: 'Home', tabBarIcon: ({ size, color }) => (
          <FontAwesome name="home" size={size} color={color} />
        ),
        header: () => <CustomHeader />,
      }}
      />
      <Tabs.Screen
        name="search"
        options={{ title: 'Search', tabBarIcon: ({ size, color }) => (
          <FontAwesome name="search" size={size} color={color} />
        ),
        header: () => <CustomHeader />,
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
        header: () => <CustomHeader />,
      }}
      />
      <Tabs.Screen
        name="account"
        options={{ title: 'Profile', tabBarIcon: ({ size, color }) => (
          <FontAwesome name="user" size={size} color={color} />
        ),
      }}
      />
    </Tabs>
  );
};
export default Layout;