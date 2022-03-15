import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Platform} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {
  faCircle,
  faCog,
  faHome,
  faReceipt,
} from '@fortawesome/free-solid-svg-icons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const MenuIcon = (color: string, icon: IconDefinition) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      color={color}
      size={23}
      style={{marginBottom: -10}}
    />
  );
};

const MenuLabel = (color: string) => {
  return (
    <FontAwesomeIcon
      icon={faCircle}
      color={color === colors.primary ? colors.primary : colors.background}
      style={{marginBottom: 15}}
      size={7}
    />
  );
};

export const TabsNavigator = () => {
  const {top} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: colors.background,
        marginTop: top,
      }}
      tabBarOptions={{
        showLabel: true,
        activeTintColor: colors.primary,
        inactiveTintColor: colors.inactive,
        style: {
          position: 'absolute',
          backgroundColor: colors.background,
          borderWidth: 0,
          borderTopWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 105 : 76,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: ({color}) => MenuLabel(color),
          tabBarIcon: ({color}) => MenuIcon(color, faHome),
        }}
      />
      <Tab.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          tabBarLabel: ({color}) => MenuLabel(color),
          tabBarIcon: ({color}) => MenuIcon(color, faReceipt),
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarLabel: ({color}) => MenuLabel(color),
          tabBarIcon: ({color}) => MenuIcon(color, faCog),
        }}
      />
    </Tab.Navigator>
  );
};
