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
                        query: searchQuery
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
                            let bookInShelf = this.props.booksInShelf.filter((bookInShelf) => bookInShelf.id === book.id)

                            let shelf
                            if (bookInShelf.length > 0) {
                                // If bookInShelf contains a book it means that
                                // the book being displayed is already in a shelf.
                                // So its shelf must be changed accordingly.
                                shelf = bookInShelf[0].shelf
                            } else {
                                shelf = 'none'
                            }

                            return (
                                <Book 
                                    key={ book.id }
                                    bookId={ book.id }
                                    coverImage={ (!book.imageLinks || !book.imageLinks.thumbnail) ? '' : book.imageLinks.thumbnail }
                                    shelf={ shelf }
                                    title={ !book.title ? '': book.title }
                                    authors={ !book.authors ? [] : book.authors }
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