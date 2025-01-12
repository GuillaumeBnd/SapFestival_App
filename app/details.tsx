import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import colors from '../assets/colors/colors';
import { useRoute } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Details = () => {
    const route = useRoute();
    const { item } = route.params; // Récupérer les données de l'artiste
  
    return (
      <View style={styles.container}>
        <ImageBackground source={item.image} style={styles.backgroundImage} resizeMode="cover" />

        <View style={styles.descriptionWrapper}>

          <View style={styles.descriptionTextWrapper}>
            <Text style={styles.descriptionTitle}>{item.name}</Text>
            <ScrollView style={styles.descriptionScrollable} >
              <Text style={styles.descriptionText}>{item.bio}</Text>
            </ScrollView>
          </View>

          <View style={styles.infoWrapper}>
          
            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>STYLE</Text>

              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>{item.style}</Text>
              </View>
            
            </View>

            <View style={styles.infoItem}>
              
              <Text style={styles.infoTitle}>CRENEAU</Text>

              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>{item.duration}</Text>
              </View>
            
            </View>

          </View>

        </View>
        
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    backgroundImage: {
      height: height * 0.6,
      width: width,
      justifyContent: 'space-between',
    },
    descriptionWrapper: {
      flex: 1,
      backgroundColor: colors.white,
      marginTop: -120,
      borderRadius: 25,
    },
    descriptionTextWrapper: {
      marginTop: 30,
      marginHorizontal: 20,
    },
    descriptionTitle: {
      fontFamily: 'Lato-Bold',
      fontSize: 24,
      color: colors.black,
    },
    descriptionScrollable: { 
      height : 230,
      marginTop : 10,
    },
    descriptionText: {
      fontFamily: 'Lato-Regular',
      fontSize: 18,
      color: colors.darkGray,
    },
    infoWrapper: {
      flexDirection: 'row',
      marginHorizontal: 20,
      marginTop: 20,
      justifyContent: 'space-between',
      position: 'absolute',
      bottom: 10,
      left: 0,
      right: 0,
    },
    infoItem: {},
    infoTitle: {
      fontFamily: 'Lato-Bold',
      fontSize: 12,
      color: colors.black,
    },
    infoTextWrapper: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      marginTop: 5,
    },
    infoText: {
      fontFamily: 'Lato-Bold',
      fontSize: 24,
      color: colors.orange,
    },
  });
  
  export default Details;