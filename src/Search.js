import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {
    static propTypes = {
        booksInShelf: PropTypes.array.isRequired,
        updateBook: PropTypes.func.isRequired
    }

    state = {
        availableBooks: [],
        query: '',
    }

    updateQuery = (searchQuery) => {
        // As recommended in the Code Review, updating the query state here, before any seach request.
        // This will allow the input field to keep synced with what the user types.
        this.setState({
            query: searchQuery
        })

        // If searchQuery is an empty string, simply clear availableBooks.
        if (searchQuery === '') {
            this.setState({
                availableBooks: [],
                query: searchQuery
            })
        } else {
            BooksAPI.search(searchQuery, 50).then((response) => {
                console.log(response)
                if(!response.error) {
                    this.setState({
                        availableBooks: response,
                    })
                } else {
                    this.setState({
                        query: searchQuery
                    })
                }
            })
        }
    }
   
    clearQuery = () => {
        this.setState({ query: '' })
    }
   
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type='text'
                            placeholder='Search by title or author'
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {
                        this.state.availableBooks.map((book) =>
                        {
                            // Checking whether the book being displayed is already in a shelf.
                            const bookInShelf = this.props.booksInShelf.find((bookInShelf) => bookInShelf.id === book.id)
                            // If bookInShelf is really a book it means that
                            // the book being displayed is already in a shelf.
                            // So its shelf must be changed accordingly.
                            // Otherwise its shelf will be 'none'.
                            const shelf = !!bookInShelf ? bookInShelf.shelf : 'none';
                            book.shelf = shelf

                            return (
                                <Book 
                                    key={ book.id }
                                    bookId={ book.id }
                                    book={ book }
                                    updateBook={ this.props.updateBook }
                                />
                            )
                        })
                    }
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search