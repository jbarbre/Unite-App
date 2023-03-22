import React, { Suspense, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform, Text } from "react-native";
import { I18nextProvider, useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'intl-pluralrules';
import i18n from './components/i18n';
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

const Stack = createNativeStackNavigator();

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
                    <Stack.Navigator screenOptions={{headerShown: false}}>
                        <Stack.Screen name="Login"component={Login} />
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="Settings" component={Settings} />
                    </Stack.Navigator>
                </NavigationContainer>
            </I18nextProvider>
        </Suspense>
    );
}

export default App;
//{() => <Settings first={first} second={second} onUpdateFirst={updateFirstSwitch} onUpdateSecond={updateSecondSwitch} />}
