import { useParams } from "react-router-dom"
import Rating from '@mui/material/Rating';



const Movies = ({ movies }) => {
  const { id } = useParams();
  const found = Array.isArray(movies)
    ? movies.find((el) => el.id.toString() === id)
    : null;

  if (!found) {
    return <h2>Film non trouvé ou données en cours de chargement...</h2>;
  }

  return (
    <div className="movie-container">
      <h1 className="movie-title">{found.title}</h1>
      <h2 className="movie-description">{found.description}</h2>
      <img className="movie-image" src={found.image} alt={found.title} />
      <Rating name="read-only" value={found.rating} readOnly />
      <iframe
        className="movie-trailer"
        src={found.trailer}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Movies;
