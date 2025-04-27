import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, ScrollView, FlatList, Alert } from 'react-native';
import { Feather, FontAwesome, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import styles from './patientHome.styles';
import BottomNavigation from './BottomNavigation';
import { useRouter } from 'expo-router';
import { auth } from '../../config/firebaseConfig';
import { signOut } from 'firebase/auth';

interface ArticleItem {
  id: string;
  title: string;
  date: string;
  readTime: string;
  image: any;
  bookmarked: boolean;
}

export default function PatientHome() {
  const router = useRouter();
  const articles: ArticleItem[] = [
    {
      id: '1',
      title: 'The 25 Healthiest Fruits You Can Eat, According to a Nutritionist',
      date: 'Jun 10, 2023',
      readTime: '5min read',
      image: require('../../assets/images/fruits.jpg'),
      bookmarked: true
    },
    {
      id: '2',
      title: 'The Impact of COVID-19 on Healthcare Systems',
      date: 'Jul 15, 2023',
      readTime: '8min read',
      image: require('../../assets/images/covid19.jpeg'),
      bookmarked: false
    },
    {
      id: '3',
      title: 'The Impact of COVID-19 on Healthcare Systems',
      date: 'Jul 15, 2023',
      readTime: '8min read',
      image: require('../../assets/images/covid19.jpeg'),
      bookmarked: false
    }
  ];

  // Handle user sign out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      
      // Trigger the USER_CHANGED event to clear form data across the app
      if (global.EventEmitter) {
        console.log("PatientHome: Emitting USER_CHANGED event for sign out");
        global.EventEmitter.emit('USER_CHANGED');
        // Debug to confirm listeners were notified
        global.EventEmitter.debug();
      } else {
        console.warn("PatientHome: EventEmitter not available for sign out");
      }
      
      // Navigate back to login screen with replace to prevent going back
      setTimeout(() => {
        router.replace('/login');
      }, 100);
    } catch (error) {
      console.error('Error signing out:', error);
      Alert.alert('Sign Out Error', 'Failed to sign out. Please try again.');
    }
  };

  const renderArticleItem = ({ item }: { item: ArticleItem }) => (
    <View style={styles.articleItem}>
      <Image source={item.image} style={styles.articleImage} />
      <View style={styles.articleContent}>
        <Text style={styles.articleTitle} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.articleMeta}>{item.date} • {item.readTime}</Text>
      </View>
      <TouchableOpacity style={styles.bookmarkButton}>
        <FontAwesome 
          name={item.bookmarked ? "bookmark" : "bookmark-o"} 
          size={18} 
          color={item.bookmarked ? "#7d4c9e" : "#888"} 
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Image 
            source={require('../../assets/images/profile.jpg')} 
            style={styles.profileImage} 
          />
          <View style={styles.welcomeText}>
            <Text style={styles.welcomeTitle}>welcome !</Text>
            <Text style={styles.userName}>Ruchita</Text>
            <Text style={styles.welcomeSubtitle}>How is it going today ?</Text>
          </View>
        </View>
        
        {/* Sign Out Button */}
        <TouchableOpacity 
          style={styles.signOutButton} 
          onPress={handleSignOut}
        >
          <Feather name="log-out" size={16} color="#7d4c9e" />
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
        
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Feather name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search doctor, drugs, articles..."
            placeholderTextColor="#aaa"
          />
        </View>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIconContainer}>
              <FontAwesome name="stethoscope" size={22} color="#fff" />
            </View>
            <Text style={styles.actionText}>View History</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIconContainer}>
              <MaterialCommunityIcons name="pill" size={24} color="#fff" />
            </View>
            <Text style={styles.actionText}>Allergies</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIconContainer}>
              <FontAwesome name="file-text-o" size={22} color="#fff" />
            </View>
            <Text style={styles.actionText}>Lab Reports</Text>
          </TouchableOpacity>
        </View>

        {/* Health Articles */}
        <View style={styles.articlesSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Health article</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllLink}>See all</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={articles}
            renderItem={renderArticleItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="home" />
    </SafeAreaView>
  );
}
