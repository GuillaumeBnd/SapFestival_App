
/**
   * define the "Events" array with the same date as in "days" as key, and "Event" as value
   */
const calendarData = {
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

export default calendarData;