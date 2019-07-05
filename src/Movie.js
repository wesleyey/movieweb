import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";

class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="Movie">
        <div className="Movie__columns">
          <img
            src={this.props.poster}
            alt={this.props.title}
            title={this.props.title}
          />
        </div>
        <div className="Movie__columns">
          <h1> {this.props.title} </h1>
          <div className="Movie__genres">{this.props.genres.join(", ")}</div>
          <p className="Movie__synopsis">{this.props.synopsis}</p>
        </div>
      </div>
    );
  }
}

export default Movie;
