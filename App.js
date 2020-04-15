import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./screens/HomeScreen";
import LinksScreen from "./screens/LinksScreen";

const App = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Links: { screen: LinksScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "Links") {
          iconName = `ios-checkmark-circle${focused ? "" : "-outline"}`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: "#42f44b",
      inactiveTintColor: "gray",
    },
  }
);
export default createAppContainer(App);
