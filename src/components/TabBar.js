import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const TABS = [
  { key: 'Home', icon: 'home-outline' },
  { key: 'Actions', icon: 'toggle-outline' },
  { key: 'Alerts', icon: 'warning-outline' },
  { key: 'Profile', icon: 'person-outline' }
];

function FloatingTabBar({ activeTab, onTabPress }) {
  return (
    <View style={styles.container}>
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
              size={24}
              color={isFocused ? '#F3680A' : 'black'}
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
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {children}
      </View>
      <FloatingTabBar
        activeTab={route.name}
        onTabPress={(tabKey) => navigation.navigate(tabKey)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 24,
    left: 20,
    right: 20,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 14,
    fontWeight: 'bold'
  },
});