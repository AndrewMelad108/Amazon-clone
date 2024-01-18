import React from "react";
import "./Movies.css";
import Movies1 from "../../images/Prime_Illustration_Desktop_Music2x._CB605256032_.png";
import Movies2 from "../../images//Prime_Illustration_Desktop_Video2x._CB654656689_.png";
function Movies() {
  return (
    <div className="Movies">
      <h1 className="Movies-title">Popular movies and shows</h1>
      <p className="Movies-des">
        New releases. Award-winning Amazon Originals. Watch what you love on
        your favorite devices.
      </p>
      <img src={Movies1} alt="MoviesImage" className="MoviesImage" />
      <h1 className="Movies-title">All the music + top podcasts ad-free</h1>
      <p className="Movies-des">
        Get the largest catalog of ad-free top podcasts and shuffle play any
        artist, album, or playlist on Amazon Music.
      </p>
      <img src={Movies2} alt="MoviesImage" className="MoviesImage" />
    </div>
  );
}

export default Movies;
