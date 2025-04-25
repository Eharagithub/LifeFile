import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, ScrollView,} from 'react-native';
import { useRouter } from 'expo-router';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import styles from './signup.styles';

export default function SignUp() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleSignUp = () => {
    // Your sign up logic here
    console.log('Sign up with:', { name, email, password });
  };

  const handleGoToLogin = () => {
    router.push('/login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>

        <Text style={styles.title}>Sign Up</Text>

        {/* Name Input */}
        <View style={styles.inputContainer}>
          <Feather name="user" size={20} color="#bdbdbd" style={styles.inputIcon} />
          <TextInput
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            style={styles.input}
            placeholderTextColor="#bdbdbd"
          />
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Feather name="mail" size={20} color="#bdbdbd" style={styles.inputIcon} />
          <TextInput
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={styles.input}
            placeholderTextColor="#bdbdbd"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Feather name="lock" size={20} color="#bdbdbd" style={styles.inputIcon} />
          <TextInput
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            style={styles.input}
            placeholderTextColor="#bdbdbd"
          />
          <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)} style={styles.eyeIcon}>
            <MaterialIcons
              name={showPassword ? "visibility" : "visibility-off"}
              size={20}
              color="#bdbdbd"
            />
          </TouchableOpacity>
        </View>

        {/* Checkbox and Terms */}
        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={() => setAgree((prev) => !prev)} style={styles.checkbox}>
            <View style={[styles.checkboxBox, agree && styles.checkboxBoxChecked]}>
              {agree && <Feather name="check" size={16} color="#7d4c9e" />}
            </View>
          </TouchableOpacity>
          <Text style={styles.checkboxText}>
            I agree to the healthcare{' '}
            <Text style={styles.link}>Terms of Service</Text> and{' '}
            <Text style={styles.link}>Privacy Policy</Text>
          </Text>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.signUpButton, !agree && styles.signUpButtonDisabled]}
          disabled={!agree}
        >
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Already have account section */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Allready have an account? </Text>
          <TouchableOpacity onPress={handleGoToLogin}>
            <Text style={styles.footerLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
