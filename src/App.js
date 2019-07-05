import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  state = {};

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "John wick",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/John_Wick_TeaserPoster.jpg/220px-John_Wick_TeaserPoster.jpg"
          },
          {
            title: "Spiderman",
            poster:
              "https://www.sideshow.com/storage/product-images/904867/spider-man-upgraded-suit_marvel_gallery_5d13ad633bb71_th.jpg"
          },
          {
            title: "Saw",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Saw4final.jpg/220px-Saw4final.jpg"
          },
          {
            title: "Usual Suspect",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/9/9c/Usual_suspects_ver1.jpg"
          },
          {
            title: "shazam",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Shazam%21_theatrical_poster.jpg/220px-Shazam%21_theatrical_poster.jpg"
          }
        ]
      });
    }, 3000);
  }

  _renderMovie = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />;
    });
    return movies;
  };

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovie() : "Loading..."}
      </div>
    );
  }
}

export default App;
