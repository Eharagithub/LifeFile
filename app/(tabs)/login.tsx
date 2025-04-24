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
} from "react-native";
import styles from "./login.styles";

export default function LoginScreen() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordIsVisible, setPasswordIsVisible] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
       
      
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableOpacity style={styles.backButton}>
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
        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordButtonText}>
            Forgot password?
          </Text>
        </TouchableOpacity>

        {/* Login button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.signupRow}>
          <Text style={styles.signupText}>Don’t have an account? </Text>
          <TouchableOpacity>
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
