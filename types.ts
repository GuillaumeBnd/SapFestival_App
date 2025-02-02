export interface Artist {
  id: string;
  name: string;
  image: any;
  bio?: string;
  style?: string;
  duration?: string;
}

export type RootStackParamList = {
    "(tabs)/artists": { focusArtist: string };
    "(tabs)/calendar": undefined;
    "details": {item: Artist};
  };
  