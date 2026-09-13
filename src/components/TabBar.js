import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
    SafeAreaView,
    useSafeAreaInsets,
} from "react-native-safe-area-context";

const TABS = [
    { key: "Home", icon: "home-outline" },
    { key: "Actions", icon: "toggle-outline" },
    { key: "Alerts", icon: "warning-outline" },
    { key: "Profile", icon: "person-outline" },
];

function FloatingTabBar({ activeTab, onTabPress }) {
    const insets = useSafeAreaInsets();

    return (
        <View
            style={[
                styles.container,
                {
                    bottom: Math.max(insets.bottom, 8) + 8,
                },
            ]}
        >
            {TABS.map((tab) => {
                const isFocused = activeTab === tab.key;

                return (
                    <TouchableOpacity
                        key={tab.key}
                        onPress={() => onTabPress(tab.key)}
                        style={styles.tabItem}
                        activeOpacity={0.7}
                        accessibilityLabel={tab.key}
                        accessibilityRole="button"
                    >
                        <Ionicons
                            name={tab.icon}
                            size={30}
                            color={isFocused ? "#F3680A" : "black"}
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default function ScreenWithTabBar({ children }) {
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={styles.screen}>
            <SafeAreaView
                style={styles.safeArea}
                edges={["top", "right", "bottom", "left"]}
            >
                {children}
            </SafeAreaView>

            <FloatingTabBar
                activeTab={route.name}
                onTabPress={(tabKey) => navigation.navigate(tabKey)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },

    safeArea: {
        flex: 1,
    },

    container: {
        position: "absolute",
        left: 20,
        right: 20,

        flexDirection: "row",

        backgroundColor: "#FFFFFF",
        borderRadius: 30,

        paddingVertical: 12,
        paddingHorizontal: 10,

        justifyContent: "space-around",
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.15,
        shadowRadius: 12,

        elevation: 8,
    },

    tabItem: {
        alignItems: "center",
        justifyContent: "center",

        paddingVertical: 8,
        paddingHorizontal: 14,
    },
});