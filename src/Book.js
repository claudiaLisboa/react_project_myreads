import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
    static propTypes = {
        bookId: PropTypes.string.isRequired,
        coverImage: PropTypes.string.isRequired,
        shelf: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        authors: PropTypes.array.isRequired
    }    

    render(){
        const { bookId, coverImage, shelf, title, authors } = this.props
        
        return(
            <li key={bookId }>
                 <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${coverImage})` }}></div>
                        <div className="book-shelf-changer">
                            <select value={shelf} onChange={(event) => this.updateBook(bookId, event.target.value)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{ authors.join(" / ") }</div>
                </div>
            </li>
        )
    }
}

export default Book