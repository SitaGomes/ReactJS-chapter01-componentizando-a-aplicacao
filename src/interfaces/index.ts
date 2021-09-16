export interface MovieProps {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
}
  
export interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}
  
export interface ContentProps {
    movies: MovieProps[];
    selectedGenre: GenreResponseProps;
}
  
export interface SideBarProps {
    genres: GenreResponseProps[];
    selectedGenreId: number;
    setSelectedGenreId: (id: number) => void;
  }