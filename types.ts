export interface Artist {
  id: number;  // Changé de string à number pour correspondre à artistsData
  name: string;
  bio: string;
  image: any;
  duration: string;
  style: string;
}

export type RootStackParamList = {
    "(tabs)/artists": { focusArtist: string };
    "(tabs)/calendar": undefined;
    "details": {item: Artist};
  };
  