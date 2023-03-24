import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useTranslation } from 'react-i18next';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen() {
    const { t } = useTranslation();
    return (
      <View style={styles.container}>
        <Text>{t("Home")}</Text>
      </View>
    );
  }

export default function Home() {
    return Platform.OS === "ios" ? (
      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    ) : (
      <Drawer.Navigator>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});