import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarStyle: { display: 'none' } }}>
      <Tabs.Screen
        name="landingpage"
        options={{ tabBarButton: () => null }}
      />
      <Tabs.Screen
        name="welcomeScreen"
        options={{ tabBarButton: () => null }}
      />
      <Tabs.Screen
        name="login"
        options={{ tabBarButton: () => null }}
      />
      <Tabs.Screen
        name="index"
        options={{ tabBarButton: () => null }}
      />
    </Tabs>
  );
}