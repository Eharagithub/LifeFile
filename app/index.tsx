

import React from 'react';
import { Redirect } from 'expo-router';

export default function TabIndex() {
  // Redirect to the landing page on app start
  return <Redirect href="/(tabs)/landingpage" />;
}