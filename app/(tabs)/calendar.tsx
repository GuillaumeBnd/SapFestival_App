import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableWithoutFeedback } from 'react-native';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/types";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "(tabs)/artists">;

type Event = {
  id: number
  startTime: string;
  endTime: string;
  artistName: string;
  musicStyle: string;
  bgColor: string,
};

type Events = {
  [date: string]: Event[];
};

const days = [
  { id: '2025-07-04', weekday: 'Vendredi - Night' },
  { id: '2025-07-05', weekday: 'Samedi - Day' },
  { id: '2024-07-05', weekday: 'Samedi - Night' },
];

const ScheduleScreen = () => {
  const [selectedDayId, setSelectedDayId] = useState<string>('2025-07-04');
  const navigation = useNavigation<NavigationProps>();

  const events: Events = {
    '2025-07-04': [
      { id: 1, startTime: '21:00', endTime:'22:00', artistName: 'Happy Guru', musicStyle: 'Tech-House', bgColor:'#E6E6FA'},
      { id: 2, startTime: '22:00', endTime:'23:00', artistName: 'HCC x Guizly', musicStyle: 'Dub Acoustique', bgColor:'#E0FFFF'},
      { id: 3, startTime: '23:00', endTime:'00:00', artistName: 'Pryme', musicStyle: 'Tech-House', bgColor:'#FAF0E6'},
      { id: 4, startTime: '00:00', endTime:'01:30', artistName: 'Ring 41', musicStyle: 'Tech-House', bgColor:'#FAFAD2'},
      { id: 5, startTime: '01:30', endTime:'03:00', artistName: 'Maffia Dora x DJ 1000', musicStyle: 'Tech-House', bgColor:'#E6E6FA'},
      { id: 6, startTime: '03:00', endTime:'04:30', artistName: 'Obekix', musicStyle: 'Tech-House', bgColor:'#E0FFFF'},
      { id: 7, startTime: '04:30', endTime:'06:00', artistName: 'Loul', musicStyle: 'Tech-House', bgColor:'#FAF0E6'},
    ],
    '2025-07-05': [
      { id: 8, startTime: '14:00', endTime:'15:00', artistName: 'Lemon Kid', musicStyle: 'Tech-House', bgColor:'#E6E6FA'},
      { id: 9, startTime: '15:00', endTime:'16:00', artistName: 'Falafel', musicStyle: 'Tech-House', bgColor:'#E0FFFF'},
      { id: 10, startTime: '16:00', endTime:'17:00', artistName: 'HCC', musicStyle: 'Tech-House', bgColor:'#FAF0E6'},
      { id: 11, startTime: '17:00', endTime:'18:30', artistName: 'A-Link x Bob Rose', musicStyle: 'Tech-House', bgColor:'#FAFAD2'},
      { id: 12, startTime: '18:30', endTime:'20:00', artistName: 'Gasplatine', musicStyle: 'Tech-House', bgColor:'#E6E6FA'},
    ],
    '2024-07-05': [ //2024 in order to avoid duplicate with same day in 2025
      { id: 13, startTime: '21:00', endTime:'22:00', artistName: 'R1', musicStyle: 'Tech-House', bgColor:'#E6E6FA'},
      { id: 14, startTime: '22:00', endTime:'23:00', artistName: 'Drove', musicStyle: 'Rap', bgColor:'#E0FFFF'},
      { id: 15, startTime: '23:00', endTime:'00:30', artistName: 'Cd-Rom x yAs (Label Affaire)', musicStyle: 'Tech-House', bgColor:'#FAF0E6'},
      { id: 16, startTime: '00:30', endTime:'01:30', artistName: 'Clover x Paradis Fiscal', musicStyle: 'Tech-House', bgColor:'#FAFAD2'},
      { id: 17, startTime: '01:30', endTime:'02:30', artistName: 'LX 42', musicStyle: 'Tech-House', bgColor:'#E6E6FA'},
      { id: 18, startTime: '02:30', endTime:'03:30', artistName: 'Rawza', musicStyle: 'Tech-House', bgColor:'#E0FFFF'},
      { id: 19, startTime: '03:30', endTime:'04:30', artistName: 'Raymzer', musicStyle: 'Tech-House', bgColor:'#FAF0E6'},
      { id: 20, startTime: '04:30', endTime:'06:00', artistName: 'Soapmalin', musicStyle: 'Tech-House', bgColor:'#FAFAD2'},
    ],
  };

  const selectedEvents: Event[] = events[selectedDayId] || [];

  const renderDayHeader = () => (
    <View style={styles.cardHeader}>
      <View style={styles.daysContainer}>
        {days.map((day, index) => {
          const isActive =
          selectedDayId === day.id;
          return (
            <TouchableWithoutFeedback key={index} onPress={() => setSelectedDayId(day.id)}>
              <View style={[styles.dayItem, isActive && { backgroundColor: '#25292e', borderColor: '#25292e' },]}>
                <Text style={[styles.dayWeekday, isActive && { color: '#F2AA52' },]}>
                  {day.weekday}
                </Text>
                <Text style={[styles.dayDate, isActive && { color: '#F2AA52' },]}>
                  {moment(day.id).format('DD MMM')}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </View>
  )

  const renderCalendarItem = ({ item }:{item: typeof events}) => (
    <TouchableWithoutFeedback onPress={() => navigation.navigate("artists", { focusArtist: item.id })}>

      <View style={styles.eventItem}>
        <View style={styles.timelineContainer}>
          <View style={styles.timelineDot} />
          <View style={styles.timelineLine} />
        </View>

        <View style={styles.eventContent}>
          <View style={styles.eventHours}>
            <Text style={styles.startTime}>{item.startTime}</Text>
            <Text style={styles.endTime}>{item.endTime}</Text>
          </View>

          <View style={[styles.card,{backgroundColor:item.bgColor}]}>
            <Text style={styles.cardTitle}>{item.artistName}</Text>
            <Text style={styles.cardDate}>{item.musicStyle}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  return (

    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 16 }}
        data={selectedEvents}
        ListHeaderComponent={renderDayHeader}
        stickyHeaderIndices={[0]}
        renderItem={renderCalendarItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
    
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 20,
    backgroundColor: '#F2C9E0'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginLeft:16
  },
  cardHeader: {
    flex:1,
    backgroundColor: '#ff7f50',
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
    marginBottom: 20,
    padding: 18,
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  card: {
    flex:1,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    marginBottom: 6,
  },
  dayItem: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F2784B',
    padding: 10,
    backgroundColor: '#F9F2EA',
  },
  dayWeekday: {
    fontSize: 14,
    fontWeight: '500',
    color: '#F2784B',
  },
  dayDate: {
    fontSize: 15,
    fontWeight: '600',
    color: '#F2784B',
  },
  eventItem: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  timelineContainer: {
    width: 30,
    alignItems: 'center',
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ff7f50',
    marginBottom: 8,
  },
  timelineLine: {
    flex: 1,
    width: 2,
    backgroundColor: '#ff7f50',
  },
  eventContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  eventHours: {
    marginRight: 8,
    alignItems: 'flex-end',
  },
  startTime: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  endTime: {
    fontSize: 16,
  },
  cardTitle: {
    fontSize: 16,
    color: '#00008B',
    marginBottom: 4,
  },
  cardDate: {
    fontSize: 12,
    color: '#00008B',
    marginBottom: 8,
  },
});

export default ScheduleScreen;
