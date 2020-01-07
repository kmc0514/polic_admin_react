import React from "react";
import "./Home.css";
import axios from "axios";
import Movie from "../component/Movie";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovie() {
    setTimeout(async () => {
      const {
        data: {
          data: { movies }
        }
      } = await axios.get(
        "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
      );
      this.setState({ isLoading: false, movies });
    });
  }

  componentDidMount() {
    this.getMovie();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <main className="movie__main">
        <ul className="movie__list">
          {isLoading
            ? "NOW LOADING..."
            : movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  poster={movie.medium_cover_image}
                  title={movie.title}
                  sum={movie.summary}
                  bg={movie.background_image_original}
                ></Movie>
              ))}
        </ul>
      </main>
    );
  }
}

export default Home;
