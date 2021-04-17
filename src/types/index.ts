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
