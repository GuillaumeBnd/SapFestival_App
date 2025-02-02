import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/types";
import imageMapper from '@/components/imageMapper';
import artistsData from '../../assets/data/artistsData';
import type { Artist } from "@/types";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function ArtistsScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.grid}>
          {artistsData.map((artist: Artist, index: number) => (
            <TouchableOpacity 
              key={`artist-${index}`} 
              style={styles.artistContainer}
              onPress={() => navigation.navigate('details', { item: artist })}
            >
              <View style={styles.circleImageContainer}>
                <Image
                  alt={artist.name}
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
    width: '45%',
    alignItems: 'center',
    marginBottom: 20,
  },
  circleImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
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