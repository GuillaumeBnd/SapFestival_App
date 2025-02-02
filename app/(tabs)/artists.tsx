import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet,SafeAreaView,ScrollView, Text, TouchableOpacity, View,Image,} from 'react-native';
import { useRoute } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams } from 'expo-router'; // used to search in the page, the param
import imageMapper from '@/components/imageMapper'; //  image mapper reference all pictures without having to enter the complete path
import artistsData from '../../assets/data/artistsData';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/types";
import { ImageSourcePropType } from 'react-native';
import { useMemo } from 'react';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "details">;




export default function ArtistsScreen() {
  const navigation = useNavigation<NavigationProps>();


  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.grid}>
          {artistsData.map((artist, index) => (
            <TouchableOpacity 
              key={`artist-${index}`} 
              style={styles.artistContainer}
              onPress={() => navigation.navigate('details', { item :artist })}
            >
              <View style={styles.circleImageContainer}>
                <Image
                  alt=""
                  resizeMode="cover"
                  source={imageMapper[artist.image]}
                  style={styles.circleImage}
                />
              </View>
              <Text style={styles.artistName}>{artist.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: '#F2C9E0',
  },
  container: {
    padding: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  artistContainer: {
    width: '30%', // Pour avoir 3 artistes par ligne
    alignItems: 'center',
    marginBottom: 20,
  },
  circleImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 8,
  },
  circleImage: {
    width: '100%',
    height: '100%',
  },
  artistName: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
  },
});
