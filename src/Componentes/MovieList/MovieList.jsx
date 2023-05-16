import React, { useEffect, useState } from "react";
import "./MovieList.css";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching movie data:", error);
        setIsLoading(false);
      });
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="list__cards">
          {movieList.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
