import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

class SearchPage extends Component {
  state = {
    query: ""
  };

  /**
   * @description Updates the state and calls the query function in the parent component
   * @param {string} query - The name of the new shelf that the book is been moved to
   */
  updateQuery = query => {
    this.setState({ query: query });
    this.props.onQueryUpdate(this.state.query);
  };

  render() {
    const { queryResults, onUpdateBook } = this.props;
    const { query } = this.state;
    


    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {query !== "" &&
            queryResults.length !== 0 && (
              <ol className="books-grid">
                {queryResults.map(book => (
                  <Book book={book} key={book.id} onUpdateBook={onUpdateBook} />
                ))}
              </ol>
            )}
        </div>
      </div>
    );
  }
}
export default SearchPage;
