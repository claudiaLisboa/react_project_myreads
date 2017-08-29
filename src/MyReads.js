import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class MyReads extends Component{
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateBook: PropTypes.func.isRequired
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
                           title="Currently Reading"
                           books={ books.filter((book) => book.shelf === "currentlyReading") }
                           updateBook={ this.props.updateBook }
                        />
                        <BookShelf
                           title="Want to Read"
                           books={ books.filter((book) => book.shelf === "wantToRead") }
                           updateBook={ this.props.updateBook }
                        />
                        <BookShelf
                           title="Read"
                           books={ books.filter((book) => book.shelf === "read") }
                           updateBook={ this.props.updateBook }
                        />
                    </div>
                </div>
                <div className="open-search">
                    <Link  to="/search">Add a book</Link>
                </div>   
            </div>
          )
      }

}

export default MyReads