import React from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const homepageLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Library",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="book"
              size={24}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="extensionPage"
        options={{
          title: "Extensions",
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="compass"
              size={24}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profilePage"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="person"
              size={24}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default homepageLayout;
