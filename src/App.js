import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import MyReads from './MyReads'

class App extends React.Component {
  state = {
    // Books in the bookshelves.
    books: [ ],
  }

  componentDidMount() {
    // Fetching all books currently in the bookshelves and saving them in the state.books array.
    BooksAPI.getAll().then(
      (result) => {this.setState({ books: result })}
    )
  }

  updateBook(bookId, shelf) {
    // Retrieving the book from this.state.books by the id.
    // The filter method returns an array.
    // The [0] at the end retrieves the actual book inside the array.
    let book = this.state.books.filter((book) => book.id === bookId)[0]

    // Passing the book to BooksAPI.update in order to update its shelf in the backend.
    BooksAPI.update(book, shelf)
      .then(console.log("Called BooksAPI.update", bookId, shelf))

    // Updating the book's shelf.
    book.shelf = shelf

    // Updating the book in this.state.books by filtering it out and adding it back in.
    this.setState(state => ({
      books: this.state.books.filter((book) => book.id !== bookId).concat(book)
    }))
  }

  render() {
    return (
            <div className="app">
              {/* <Route exact path='/' render={() => ( */}
                  <MyReads 
                     books = { this.state.books }
                     onShelfChange = { this.updateBook }
                  />
              {/* )} /> */}
              {/* <Route path='/search' render={({history}) =>(
                  <Search 
                  
                  />
              )} /> */}
            </div>
       )
  }
}

export default App
