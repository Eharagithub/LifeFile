import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Image, Platform } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import styles from './signup.styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';

export default function CreateProfile({ navigation }: any) {
    const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [nic, setNic] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [fileName, setFileName] = useState('No file chosen');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Dummy file picker
  const handleChooseFile = () => {
    setFileName('profile.jpg');
  };
  const handleSignup = () => {
    router.push('/signup');
  };
  const HealthProfile= () => {
    router.push('/healthProfile');
  };


   // Handle date change
   const onChangeDate = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);

        // Format date as DD/MM/YYYY
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = currentDate.getFullYear();
        setDob(`${day}/${month}/${year}`);
      };
    
      // Show date picker
      const showDatepicker = () => {
        setShowDatePicker(true);
      };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f7f7' }}>
      <ScrollView contentContainerStyle={styles.container}>

         {/* Logo and Steps */}
        <View style={styles.logoContainer}>
            <Image source={require('../../assets/images/logo.png')}
                    style={styles.heartIcon}
                    resizeMode="contain"/>
            </View>
        
        <View style={styles.stepsRow}>
          <View style={styles.stepCircle}><Text style={styles.stepNumInactive}>1</Text></View>
          <View style={styles.stepLine} />
          <View style={styles.stepCircleActive}><Text style={styles.stepNum}>2</Text></View>
          <View style={styles.stepLine} />
          <View style={styles.stepCircle}><Text style={styles.stepNumInactive}>3</Text></View>
        </View>
        <View style={styles.stepsLabelRow}>
          <Text style={styles.stepLabel}>Account</Text>
          <Text style={styles.stepLabelActive}>Personal</Text>
          <Text style={styles.stepLabel}>Health</Text>
        </View>

        {/* Section Title */}
        <View style={styles.sectionTitleRow}>
          <Feather name="user" size={18} color="#222" />
          <Text style={styles.sectionTitle}> Personal Information</Text>
        </View>
        <View style={styles.sectionDivider} />

        {/* Full Name */}
        <Text style={styles.inputLabel}>Full Name</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter your Full Name"
            placeholderTextColor="#bdbdbd"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

       {/* Date of Birth */}
       <Text style={styles.inputLabel}>
          Date of Birth <Text style={styles.req}>*</Text>
        </Text>
        <TouchableOpacity 
          style={styles.inputWrapper} 
          onPress={showDatepicker}
        >
          <Feather name="calendar" size={18} color="#bdbdbd" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="DD/MM/YYYY"
            placeholderTextColor="#bdbdbd"
            value={dob}
            editable={false} // Make it non-editable as we'll use the date picker
          />
          <Feather name="chevron-down" size={18} color="#bdbdbd" />
        </TouchableOpacity>

         

        {/* NIC */}
        <Text style={styles.inputLabel}>
          NIC <Text style={styles.req}>*</Text>
        </Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter your NIC"
            placeholderTextColor="#bdbdbd"
            value={nic}
            onChangeText={setNic}
          />
        </View>

        {/* Gender */}
        <Text style={styles.inputLabel}>
          Gender <Text style={styles.req}>*</Text>
        </Text>
        <View style={styles.inputWrapper}>
          <Picker
            selectedValue={gender}
            style={[styles.dropdown, !gender ? {color: '#bdbdbd'} : {color: '#222'}]}
            onValueChange={(itemValue) => setGender(itemValue)}
            dropdownIconColor="#bdbdbd"
          >
            <Picker.Item label="Select gender" value="" color="#bdbdbd" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Other" value="other" />
          </Picker>
        </View>

        {/* Address */}
        <Text style={styles.inputLabel}>Address</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter personal Address"
            placeholderTextColor="#bdbdbd"
            value={address}
            onChangeText={setAddress}
          />
        </View>

        {/* Contact No */}
        <Text style={styles.inputLabel}>Contact No</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter a valid contact number"
            placeholderTextColor="#bdbdbd"
            value={contact}
            onChangeText={setContact}
            keyboardType="phone-pad"
          />
        </View>

        {/* Profile Picture */}
        <View style={styles.profileRow}>
          <View style={styles.profileAvatar}>
            <Feather name="user" size={36} style={styles.profileIcon} />
          </View>
          <View style={styles.profileTextCol}>
            <Text style={styles.profileLabel}>Profile Picture</Text>
            <View style={styles.fileRow}>
              <TouchableOpacity style={styles.chooseFileBtn} onPress={handleChooseFile}>
                <Text style={styles.chooseFileText}>Choose File</Text>
              </TouchableOpacity>
              <Text style={styles.fileName}>{fileName}</Text>
            </View>
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.previousBtn} onPress={handleSignup}>
            <Text style={styles.previousBtnText} >Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextBtn} onPress={HealthProfile}>
            <Text style={styles.nextBtnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
