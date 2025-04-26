import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Image, Alert, ActivityIndicator } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './signup.styles';
import { useRouter } from 'expo-router';
import { auth } from '../../config/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // Add state to store the user ID
  const [userId, setUserId] = useState('');

  const handleLogin = () => {
    router.push('/login');
  };

  const createProfile = (uid: string) => {
    // Fixed navigation path - use the full path including the tabs directory structure
    router.push({
      pathname: './createProfile',
      params: { userId: uid }
    });
  };
 

  const handleSignUp = async () => {
    // Input validation
    if (!email || !password || !confirm) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    if (password !== confirm) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    try {
      setIsLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;
      console.log('User created with ID:', uid);
      
      // Set user ID and navigate to the next step
      setUserId(uid);
      createProfile(uid);
    } catch (error: any) {
      console.error('Signup error:', error);
      Alert.alert(
        'Signup Failed',
        error.message || 'Failed to create account. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Logo and Steps */}
         <View style={styles.logoContainer}>
            <Image source={require('../../assets/images/logo.png')}
                   style={styles.heartIcon}
                   resizeMode="contain"/>
        </View>

        <View style={styles.stepsRow}>
          <View style={styles.stepCircleActive}><Text style={styles.stepNum}>1</Text></View>
          <View style={styles.stepLine} />
          <View style={styles.stepCircle}><Text style={styles.stepNumInactive}>2</Text></View>
          <View style={styles.stepLine} />
          <View style={styles.stepCircle}><Text style={styles.stepNumInactive}>3</Text></View>
        </View>
        <View style={styles.stepsLabelRow}>
          <Text style={styles.stepLabelActive}>Account</Text>
          <Text style={styles.stepLabel}>Personal</Text>
          <Text style={styles.stepLabel}>Health</Text>
        </View>

        {/* Section Title */}
        <View style={styles.sectionTitleRow}>
          <MaterialCommunityIcons name="checkbox-blank-outline" size={18} color="#222" />
          <Text style={styles.sectionTitle}> Create your Account</Text>
        </View>

        <View style={styles.sectionDivider} />
        {/* Email */}
        <Text style={styles.inputLabel}>
          Email (Will be the User Name)<Text style={styles.req}>*</Text>
        </Text>
        <View style={styles.inputWrapper}>
          <Feather name="mail" size={18} color="#bdbdbd" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#bdbdbd"
            value={email}
            autoCapitalize="none"
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        {/* Password */}
        <Text style={styles.inputLabel}>
          Password <Text style={styles.req}>*</Text>
        </Text>
        <View style={styles.inputWrapper}>
          <Feather name="lock" size={18} color="#bdbdbd" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#bdbdbd"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => setShowPassword((v) => !v)}>
            <Feather name={showPassword ? "eye" : "eye-off"} size={18} color="#bdbdbd" />
          </TouchableOpacity>
        </View>

        {/* Confirm Password */}
        <Text style={styles.inputLabel}>
          Confirm Password<Text style={styles.req}>*</Text>
        </Text>
        <View style={styles.inputWrapper}>
          <Feather name="lock" size={18} color="#bdbdbd" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Re-enter your password"
            placeholderTextColor="#bdbdbd"
            value={confirm}
            onChangeText={setConfirm}
            secureTextEntry={!showConfirm}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => setShowConfirm((v) => !v)}>
            <Feather name={showConfirm ? "eye" : "eye-off"} size={18} color="#bdbdbd" />
          </TouchableOpacity>
        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.exitBtn} onPress={handleLogin}>
            <Text style={styles.exitBtnText}>Exit</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.nextBtn} 
            onPress={handleSignUp}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" size="small" />
            ) : (
              <Text style={styles.nextBtnText}>Next</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* Login Link */}
        <View style={styles.loginRow}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
