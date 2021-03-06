import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component{
    static propTypes = {
        books: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired,
        updateBook: PropTypes.func.isRequired
    }    

    render(){
        const { books, title } = this.props

        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ title }</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        books.map((book) => 
                        <Book 
                            key={ book.id }
                            bookId={ book.id }
                            book={ book }
                            updateBook={ this.props.updateBook }
                        />)
                    }
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf
