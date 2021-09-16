import { useEffect, useState } from 'react';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import {MovieProps, GenreResponseProps} from './interfaces'

export function App() {

  const [movies, setMovies] = useState<MovieProps[]>([]);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);


  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      
      <SideBar 
        genres={genres}
        selectedGenreId={selectedGenreId}
        setSelectedGenreId={setSelectedGenreId}
      />

      <Content 
        movies={movies}
        selectedGenre={selectedGenre}
      />

    </div>
  )
}