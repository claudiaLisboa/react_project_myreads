import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateBook: PropTypes.func.isRequired
    }

    state = {
        availableBooks: [],
        query: '',
    }

    updateQuery = (searchQuery) => {
        BooksAPI.search(searchQuery, 50).then((response) => {
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
            console.log(response)
        })
    }
   
    clearQuery = () => {
        this.setState({ query: '' })
    }
   
    render() {
        return (
          <div className="search-books">
            <div className="search-books-bar">
                <div className="close-search">
                    <Link  to="/">Back</Link>
                </div>
                <div className="search-books-input-wrapper">
                    {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                    */}
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
                        <Book 
                            key={ book.id }
                            bookId={ book.id }
                            coverImage={ book.imageLinks.thumbnail }
                            shelf={ book.shelf }
                            title={ book.title }
                            authors={ book.authors }
                            updateBook={ this.props.updateBook }
                        />
                    )
                }
            </ol>
            </div>
          </div>
        )
    }
}

export default Search