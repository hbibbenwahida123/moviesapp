
import { useState } from 'react';
import './App.css';

import NavMovies from './components/NavMovie';
import ListMovies from './components/ListMovies';
import AddMovies from './components/AddMovies';
import FilterMovies from './components/FilterMovies';





function App()
{

const [titre, settitre] =useState ('')

  const [movies, setmovie] = useState([
    {
      title : "Inception",
      description : "Un voleur s'infiltre dans les rêves pour voler des secrets.",
      image : "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
      rating : 4
    },
    {
      title : "Interstellar",
      description : "Des astronautes traversent un trou de ver pour sauver l'humanité.",
      image : "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      rating : 3.5
    },
    {
      title : "The Dark Knight",
      description : "Batman affronte le Joker pour sauver Gotham.",
      image : "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      rating : 5
    },
    {
      title : "Parasite",
      description : "Une famille pauvre infiltre une maison bourgeoise.",
      image : "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      rating : 4.5
    },
    {
      title : "Forrest Gump",
      description : "Un homme simple traverse les grands moments de l'histoire.",
      image : "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
      rating : 3
    },
    {
      title : "The Matrix",
      description : "Un hacker découvre que son monde est une simulation.",
      image : "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      rating : 3
    },
    {
      title : "Gladiator",
      description : "Un général romain devient esclave et cherche sa vengeance.",
      image : "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
      rating : 2.5
    },
    {
      title : "Titanic",
      description : "Une histoire d'amour tragique à bord du Titanic.",
      image : "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
      rating : 4.5
    },
    {
      title : "Joker",
      description : "Arthur Fleck est un comédien raté vivant à Gotham, rejeté par la société et victime d'humiliations.",
      image : "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      rating : 5
    },
    {
      title: "Avengers: Endgame",
      description : "Après que Thanos a décimé la moitié de l’univers, les Avengers restants élaborent un plan audacieux pour réparer les dégâts.",
      image : "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
      rating : 4.3
    }
  ]
  )
 
  return (

    <div>
      <NavMovies /> 
      <br>
      </br>
    <FilterMovies settitre={settitre}/>
      <AddMovies movies={movies} setmovie={setmovie}/>
      <ListMovies movies={movies} titre={titre}/>
    </div>
  );
}

export default App;
