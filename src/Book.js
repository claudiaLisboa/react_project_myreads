import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
    static propTypes = {
        bookId: PropTypes.string.isRequired,
        book: PropTypes.object.isRequired,
        updateBook: PropTypes.func.isRequired,
    }    

    render(){
        const { bookId, book } = this.props
        // Some books do not have authors.
        const authors = !!book.authors ? book.authors.join(" / ") : ""

        return(
            <li key={ bookId }>
                 <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ book.imageLinks.thumbnail })` }}></div>
                        <div className="book-shelf-changer">
                            <select value={ book.shelf } onChange={(event) => this.props.updateBook(book, event.target.value)}>
                                <option value="" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{ book.title }</div>
                    <div className="book-authors">{ authors }</div>
                </div>
            </li>
        )
    }
}

export default Book