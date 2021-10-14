import React, { Component } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

export default class SearchBar extends Component {
  state = {
    imageName: "",
  };

  hendleImageName = (e) => {
    this.setState({ imageName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.imageName.trim() === "") {
      return toast.error("ВВедіть правильний запит");
    }
    this.props.onSubmit(this.state.imageNaame);
    this.setState({ imageName: "" });
  };
  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
