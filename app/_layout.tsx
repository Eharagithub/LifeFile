import { Stack } from 'expo-router';
import React, { useEffect } from 'react';
import 'react-native-reanimated';
// Import the event emitter - with an explicit initialize call
import eventEmitter from '../utils/eventEmitter';

export default function RootLayout() {
  // Initialize the event emitter system when the app starts
  useEffect(() => {
    // Ensure EventEmitter is assigned to global scope
    if (!global.EventEmitter) {
      global.EventEmitter = eventEmitter;
      console.log("EventEmitter initialized globally");
    }
  }, []);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" options={{ title: 'Not Found' }} />
    </Stack>
  );
}