
import { useState } from 'react';
import './App.css';

import NavMovies from './components/NavMovie';
import ListMovies from './components/ListMovies';
import AddMovies from './components/AddMovies';
import FilterMovies from './components/FilterMovies';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';





function App()
{

const [titre, settitre] =useState ('')

  const [movies, setmovie] = useState([
    {
      title : "Inception",
      description : "Un voleur s'infiltre dans les rêves pour voler des secrets.",
      image : "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
      rating : 4 ,
      id : 1 ,
      trailer : "https://www.youtube.com/embed/YoHD9XEInc0?si=xEiuqgFcbjj1qgH8"  ,
    },
    {
      title : "Interstellar",
      description : "Des astronautes traversent un trou de ver pour sauver l'humanité.",
      image : "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      rating : 3.5 ,
      id : 2 ,
      trailer : "https://www.youtube.com/embed/zSWdZVtXT7E?si=HbOqmvGsVImm5C7x" 
    },
    {
      title : "The Dark Knight",
      description : "Batman affronte le Joker pour sauver Gotham.",
      image : "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      rating : 5 , 
      id : 3 ,
      trailer : "https://www.youtube.com/embed/EXeTwQWrcwY?si=mrLWp_eoDAhKXzCR" ,
    },
    {
      title : "Parasite",
      description : "Une famille pauvre infiltre une maison bourgeoise.",
      image : "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      rating : 4.5 ,
      id : 4 ,
      trailer : "https://www.youtube.com/embed/5xH0HfJHsaY?si=o0igRkBTyCQnINKL"  ,
    },
    {
      title : "Forrest Gump",
      description : "Un homme simple traverse les grands moments de l'histoire.",
      image : "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
      rating : 3 ,
      id :5 ,
      trailer : "https://www.youtube.com/embed/bLvqoHBptjg?si=ZjyOFnMt6UgZqxHa" ,
    },
    {
      title : "The Matrix",
      description : "Un hacker découvre que son monde est une simulation.",
      image : "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      rating : 3 ,
      id : 6 ,
      trailer : "https://www.youtube.com/embed/vKQi3bBA1y8?si=_ebJ7-wKJUqN5pFZ" 
    },
    {
      title : "Gladiator",
      description : "Un général romain devient esclave et cherche sa vengeance.",
      image : "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
      rating : 2.5 ,
      id : 7 , 
      trailer : "https://www.youtube.com/embed/P5ieIbInFpg?si=rl4vkRcRzCm4Y5RD"  ,
    },
    {
      title : "Titanic",
      description : "Une histoire d'amour tragique à bord du Titanic.",
      image : "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
      rating : 4.5 ,
      id : 8 ,
      trailer : "https://www.youtube.com/embed/kVrqfYjkTdQ?si=EUMTupxjnJb3jH47"  ,
    },
    {
      title : "Joker",
      description : "Arthur Fleck est un comédien raté vivant à Gotham, rejeté par la société et victime d'humiliations.",
      image : "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      rating : 5 ,
      id : 9 ,
      trailer : "https://www.youtube.com/embed/t433PEQGErc?si=Gee3xtPpp5iKe2gd" , 
    },
    {
      title: "Avengers: Endgame",
      description : "Après que Thanos a décimé la moitié de l’univers, les Avengers restants élaborent un plan audacieux pour réparer les dégâts.",
      image : "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
      rating : 4.3 ,
      id : 10 ,
      trailer : "https://www.youtube.com/embed/TcMBFSGVi1c?si=RQY2yK2AGYINR8mP" ,
    }
  ]
  )
 
  return (

  <div>
      <NavMovies /> 
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ListMovies' element={ 
        <>
        
    <FilterMovies settitre={settitre}/>
      <AddMovies movies={movies} setmovie={setmovie}/>
      <ListMovies movies={movies} titre={titre}/>
        </> }/>
        <Route path='/Movies/:id' element={<Movies movies={movies}/>}/>

      </Routes>

      
      </div>
  );
}

export default App;
