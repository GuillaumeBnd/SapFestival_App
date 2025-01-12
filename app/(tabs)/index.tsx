
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import ImageViewer from "@/components/ImageViewer";
import colors from '../../assets/colors/colors';
import activitiesData from '../../assets/data/activitiesData';
import artistsData from '../../assets/data/artistsData';
import {useNavigation} from '@react-navigation/native';
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
//import type { RootStackParamList } from "@/types"; 
import Ionicons from '@expo/vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../components/types';
import FullScreenImageModal from '@/components/imageModal';

/* 
type NavigationProps = NativeStackNavigationProp<RootStackParamList, "(tabs)">;  // this is require to navigate to the folder "/(tabs)" and then any linked screen when cliking on a "Touchable", 

const PlaceholderImage = require('@/assets/images/icon.png'); //path of the image to display


//Definition of the Home screen display

const HomeScreen = () => {

  const navigation = useNavigation<NavigationProps>(); // enable navigation


  // define data used in the "touchable", 
  //       -> "route" is the name of the screen we should navigate to 
  const cards = [
    {
      title: "Timetable",
      icon: "calendar-outline",
      route: "calendar",
    },
    {
      title: "Artistes",
      icon: "mic",
      route: "artists",
    },
    {
      title: "Activités",
      icon: "trophy-outline",
      route: "activities",
    },
    {
      title: "Info",
      icon: "information-circle-outline",
      route: "about",
    },
  ];

  // define how all class and container will work together in the screen
  //// on press the touchable activate the navigation 
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
       {cards.map((card, index) => (
          <TouchableWithoutFeedback key={index} onPress={() => navigation.navigate(card.route as keyof RootStackParamList)} > 
            <View style={styles.card}>
              <Ionicons name={card.icon} size={48} color="#F2784B" />
              <Text style={styles.cardText}>{card.title}</Text>
            </View>
          </TouchableWithoutFeedback>
    ))}
    </View>
  );
};



// How it is going to look like, color and shapes 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2C9E0',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  imageContainer: {
    alignItems: 'center', 
    marginBottom: 24, 
    marginTop: 24,
    paddingBottom : 20,
  },
  image: {
    width: 200, 
    height: 200, 
    resizeMode: 'contain', 
  },
  card: {
    width: 150,
    height: 150,
    margin: 12,
    borderRadius: 16,
    backgroundColor: '#F9F2EA',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  cardText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#25292e',
    textAlign: 'center',
  },
});

export default HomeScreen;

*/ 
type NavigationProps = NativeStackNavigationProp<RootStackParamList, "details">;

const HomeScreen = () => {

  const navigation = useNavigation<NavigationProps>();

  const renderActivityItem = ({item}) => (
    <View style={[
      styles.activityItemWrapper,
      {
        marginLeft: item.id === 'activities-1' ? 20 : 0,
      },
    ]}>
      <Image source={item.icon} style={styles.activityItemImage} />
      <Text style={styles.activityItemText}>{item.title}</Text>
    </View>
  );

  const renderArtistItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('details', { item })}>
      <Image source={item.image} style={[
          styles.artistItem,
          {
            marginLeft: item.id === 'artists-1' ? 20 : 0,
          },
        ]} />
      <View style={styles.artistNameSection}>
        <Text style={styles.artistName}>{/*item.name*/}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView >

        {/* Artistes */}
        <View style={styles.sectionWrapper}>
          <Text style={styles.sectionTitle}>Artists</Text>
          <FlatList style={styles.artistSection}
          data={artistsData}
          renderItem={renderArtistItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled={true}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.cardTitle}>Plan d'accès</Text>
          <Image
            source={require('@/assets/images/plan.jpg')} 
            style={styles.mapImage}
            resizeMode="contain"
          />
        </View> 

        {/* Activités */}
        <View style={styles.sectionWrapper}>
          <Text style={styles.sectionTitle}>Activities</Text>
          <FlatList
            data={activitiesData}
            renderItem={renderActivityItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
          />
        </View>
        

        <View style={styles.section}>
          <Text style={styles.cardTitle}>Règles à respecter</Text>
          <Text style={styles.rulesText}>
            - Ramassez vos déchets {"\n"}
            - Respectez le silence sur le camping {"\n"}
            - Respectez les personnes et leurs consentement {"\n"}
            - Toute sortie est définitive.
          </Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="fast-food-outline" size={48} color="#F2784B" style={styles.cardIcon} />
          <Text style={styles.cardTitle}>Menu & Boissons</Text>
          <Text style={styles.cardText}>
            🌭 Pad Thai {"\n"}
            🍔 Burgers végé {"\n"}
            🍟 Frites {"\n"}
            🍺 Bières Blondes {"\n"}
            🍹 Cocktails signature{"\n"}
            🥤 Sodas et jus frais
          </Text>
          <FullScreenImageModal  // call the component imageModal that enable to display a button and onPress a full screen image 
            buttonText="Voir le menu complet"
            imageSource={require('@/assets/images/menu-food.png')}
          />
        </View>

      </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  sectionWrapper: {
    marginTop: 20,
  },
  sectionTitle: {
    marginHorizontal: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F2784B',
  },
  activityItemWrapper: {
    alignItems: 'center',
    marginRight: 20,
  },
  activityItemImage: {
    width: 50,
    height: 50,
  },
  activityItemText: {
    marginTop: 10,
    fontSize: 16,
    color: colors.gray,
  },
  artistSection: {
    padding: 10,
    marginLeft: 10,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    
  },
  artistItem: {
    width: 120,
    height: 120,
    justifyContent: 'flex-end',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
  },
  artistNameSection: {
    flex:1,
  },
  artistName: {
    fontSize: 14,
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#F9F2EA',
    borderRadius: 10,
    marginHorizontal: 10,
    elevation: 5,
    paddingBottom: 20,
    paddingTop: 20,
  },
  mapImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  rulesText: {
    fontSize: 16,
    color: '#25292e',
    lineHeight: 24,
  },
  card: {
    marginHorizontal: 10,
    padding: 20,
    backgroundColor: '#FFF5E4',
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardIcon: {
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F2784B',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#25292e',
    lineHeight: 24,
    textAlign: 'center',
    paddingBottom:10,
  },
  cardButton: {
    marginTop: 20,
    backgroundColor: '#F2784B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  cardButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});

export default HomeScreen;