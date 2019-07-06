import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import LinesEllipsis from "react-lines-ellipsis";

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
            className="Movie__poster"
            src={this.props.poster}
            alt={this.props.title}
            title={this.props.title}
          />
        </div>
        <div className="Movie__columns">
          <h1> {this.props.title} </h1>
          <div className="Movie__genres">{this.props.genres.join(", ")}</div>
          <p className="Movie__synopsis">
            <LinesEllipsis
              text={this.props.synopsis}
              maxLine="10"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </p>
        </div>
      </div>
    );
  }
}

export default Movie;
