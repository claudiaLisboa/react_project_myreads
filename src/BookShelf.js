import React, { Component } from 'react'
// import Book from './Book'
import PropTypes from 'prop-types'

class BookShelf extends Component{
    static propTypes = {
        books: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired
    }    

    render(){
        const { books, title } = this.props

        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ title }</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        {/* books.map((book) => <Book/>) */}
                    }
                    </ol>
                </div>
            </div>
            // <div className="bookshelf">
            //     <h2 className="bookshelf-title">Want to Read</h2>
            //     <div className="bookshelf-books">
            //         <ol className="books-grid">
            //         {this.showBooks("wantToRead")}
            //         </ol>
            //     </div>
            // </div>
            // <div className="bookshelf">
            //     <h2 className="bookshelf-title">Read</h2>
            //     <div className="bookshelf-books">
            //         <ol className="books-grid">
            //         {this.showBooks("read")}
            //         </ol>
            //     </div>
            // </div>
        )
    }
}

export default BookShelf