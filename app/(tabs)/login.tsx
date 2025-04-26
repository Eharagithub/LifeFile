import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator
} from "react-native";
import styles from "./login.styles";
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebaseConfig';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordIsVisible, setPasswordIsVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSignup = () => {
    router.push('/signup');
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    
    try {
      setIsLoading(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", userCredential.user.uid);
      router.push('/patientHome');
    } catch (error: any) {
      console.error("Login error:", error);
      
      // Custom error messages based on Firebase error codes
      let errorMessage = "Please check your credentials and try again.";
      
      if (error.code) {
        switch (error.code) {
          case 'auth/invalid-email':
            errorMessage = 'The email address is not valid.';
            break;
          case 'auth/user-disabled':
            errorMessage = 'This account has been disabled.';
            break;
          case 'auth/user-not-found':
            errorMessage = 'No account found with this email address.';
            break;
          case 'auth/wrong-password':
            errorMessage = 'Incorrect password. Please try again.';
            break;
          case 'auth/invalid-credential':
            errorMessage = 'Invalid login credentials. Please check and try again.';
            break;
          case 'auth/too-many-requests':
            errorMessage = 'Too many login attempts. Please try again later.';
            break;
          case 'auth/network-request-failed':
            errorMessage = 'Network error. Please check your connection and try again.';
            break;
        }
      }
      
      Alert.alert(
        "Login Failed", 
        errorMessage
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email address first");
      return;
    }
    // Implement password reset functionality here
    Alert.alert("Reset Password", "A password reset link will be sent to your email.");
  };

  return (
    <SafeAreaView style={styles.container}>
       
      
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Feather name="arrow-left" size={30} color="#222" />
        </TouchableOpacity>
        <Text style={styles.title}>Login</Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Feather name="mail" size={20} color="#7C808D" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#7C808D"
            selectionColor="#8d3dad"
            onChangeText={setEmail}
            value={email}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Feather name="lock" size={20} color="#7C808D" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#7C808D"
            secureTextEntry={!passwordIsVisible}
            selectionColor="#8d3dad"
            onChangeText={setPassword}
            value={password}
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={styles.passwordVisibleButton}
            onPress={() => setPasswordIsVisible(!passwordIsVisible)}
          >
            <Feather
              name={passwordIsVisible ? "eye" : "eye-off"}
              size={20}
              color="#7C808D"
            />
          </TouchableOpacity>
        </View>

        {/* Forgot password */}
        <TouchableOpacity 
          style={styles.forgotPasswordButton}
          onPress={handleForgotPassword}
        >
          <Text style={styles.forgotPasswordButtonText}>
            Forgot password?
          </Text>
        </TouchableOpacity>

        {/* Login button */}
        <TouchableOpacity 
          style={styles.loginButton}
          onPress={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <Text style={styles.loginButtonText}>Login</Text>
          )}
        </TouchableOpacity>

        <View style={styles.signupRow}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity onPress={handleSignup}>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.orContainer}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.orLine} />
        </View>

        {/* Login with Google */}
        <TouchableOpacity style={styles.googleButton}>
          <Image
            style={styles.googleLogo}
            source={require("../../assets/images/google-logo.jpg")}
          />
          <Text style={styles.googleButtonText}>Sign in with Google</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
