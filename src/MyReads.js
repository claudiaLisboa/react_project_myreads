import React, { Component } from 'react'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'



class MyReads extends Component{
    static propTypes = {
        books: PropTypes.array.isRequired
    }    


    render(){
        const{ books } = this.props

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf
                           title = "Currently Reading"
                           books = { books.filter((book) => book.shelf === "currentlyReading") }
                        />
                        <BookShelf
                           title = "Want to Read"
                           books = { books.filter((book) => book.shelf === "wantToRead") }
                        />
                        <BookShelf
                           title = "Read"
                           books = { books.filter((book) => book.shelf === "read") }
                        />
                    </div>
                </div>
                <div className="open-search">
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>
          )
      }

}

export default MyReads