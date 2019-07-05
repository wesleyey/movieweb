import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";

class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <img src={this.props.poster} alt={this.props.title} />
        <h1> {this.props.title} </h1>
      </div>
    );
  }
}

export default Movie;
