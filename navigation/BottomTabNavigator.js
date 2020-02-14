import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import StarshipScreen from '../screens/StarshipScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Personagens',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-man" />,
        }}
      />
      <BottomTab.Screen
        name="Starship"
        component={StarshipScreen}
        options={{
          title: 'Naves',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-planet" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Lista dos Personagens';
    case 'Starship':
      return 'Lista das Naves';
  }
}
