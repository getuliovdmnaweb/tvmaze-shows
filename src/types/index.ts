export interface Image {
  medium: string;
  original: string;
}
export interface Show {
  id: string;
  image: Image;
  name: string;
}

export interface SearchedShow {
  score: number;
  show: Show;
}

export interface Episode {
  id: number;
  name: string;
  number: number;
  season: number;
  summary: string;
  image?: Image;
}
