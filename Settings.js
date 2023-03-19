import React, { useEffect } from "react";
import { View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import { useTranslation } from 'react-i18next';
import Switch from "./Switch";
import styles from "./styles";

export default function Settings({ first, second, onUpdateFirst, onUpdateSecond }) {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    useEffect(() => {
        async function saveSettings() {
            try {
                const settingsObj = { firstSwitchValue: first, secondSwitchValue: second, language: i18n.language };
                const settingsJSON = JSON.stringify(settingsObj);
                await AsyncStorage.setItem("settings", settingsJSON);
            } catch (error) {
                console.error("Error saving settings:", error);
            }
        }
        saveSettings();
    }, [first, second, i18n.language]);

    return (
        <View style={styles.container}>
            <Switch
                label={t('Setting 1')}
                value={first}
                onValueChange={onUpdateFirst}
            />
            <Switch
                label={t('Setting 2')}
                value={second}
                onValueChange={onUpdateSecond}
            />
            <Picker
                selectedValue={i18n.language}
                onValueChange={(itemValue) => changeLanguage(itemValue)}
            >
                <Picker.Item label="English" value="en" />
                <Picker.Item label="العربية" value="ar" />
                <Picker.Item label="中文" value="zh" />
                <Picker.Item label="Français" value="fr" />
                <Picker.Item label="русский" value="ru" />
                <Picker.Item label="Español" value="es" />
            </Picker>
        </View>
    );
}
