import React, { Suspense, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform, Text } from "react-native";
import { I18nextProvider, useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'intl-pluralrules';
import i18n from './i18n';
import Home from "./Home";
import Settings from "./Settings";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function App() {
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);

    const { t } = useTranslation();

    useEffect(() => {
        async function loadSettings() {
            try {
              const savedSettings = await AsyncStorage.getItem("settings");
              if (savedSettings !== null) {
                const { firstSwitchValue, secondSwitchValue, language } = JSON.parse(savedSettings);
                setFirst(firstSwitchValue);
                setSecond(secondSwitchValue);
                changeLanguage(language);
              }
            } catch (error) {
              console.log(error);
            }
        }          
        loadSettings();
    }, []);

    function changeLanguage(language) {
        i18n.changeLanguage(language);
    }

    function updateFirstSwitch(value) {
        setFirst(value);
    }

    function updateSecondSwitch(value) {
        setSecond(value);
    }

    return (
        <Suspense fallback={<Text>Loading translations...</Text>}>
            <I18nextProvider i18n={i18n}>
                <NavigationContainer>
                    {Platform.OS === "ios" && (
                        <Tab.Navigator>
                            <Tab.Screen name={t("Home")} component={Home} />
                            <Tab.Screen name={t("Settings")}>
                                {() => <Settings first={first} second={second} onUpdateFirst={updateFirstSwitch} onUpdateSecond={updateSecondSwitch} />}
                            </Tab.Screen>
                        </Tab.Navigator>
                    )}
                    {Platform.OS == "android" && (
                        <Drawer.Navigator>
                            <Drawer.Screen name={t("Home")} component={Home} />
                            <Drawer.Screen name={t("Settings")}>
                                {() => <Settings first={first} second={second} onUpdateFirst={updateFirstSwitch} onUpdateSecond={updateSecondSwitch} />}
                            </Drawer.Screen>
                        </Drawer.Navigator>
                    )}
                </NavigationContainer>
            </I18nextProvider>
        </Suspense>
    );
}

export default App;
