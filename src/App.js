import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import MyReads from './MyReads'

class App extends React.Component {
  constructor(){
    super();
   
    //get inicial state
    this.state={
      // Books in the bookshelves.
      books: [ ],
    };
  }

  componentDidMount() {
    this.loadBooks()
  }
    
  loadBooks() {
    // Fetching all books currently in the bookshelves and saving them in the state.books array.
    BooksAPI.getAll().then(
      (result) => {this.setState({ books: result })}
    )
  }

  // Declaring updateBook as an arrow function as suggested in the Code Review.
  updateBook = (book, shelf) => {
    book.shelf = shelf

    BooksAPI.update(book, shelf)
      .then((response) => {
        const books = this.state.books.filter(v => v.id !== book.id).concat([book]);
        this.setState({
          books
        });
      });
  }

  render() {
    return (
            <div className="app">
              <Route exact path='/' render={() => {
                  return (
                    <MyReads 
                      books={ this.state.books }
                      updateBook={ this.updateBook }
                    />
                  )
              }} />
              <Route path='/search' render={({history}) => {
                  return (
                    <Search 
                      booksInShelf={ this.state.books }
                      updateBook={ this.updateBook }
                    />
                  )
                }} />
            </div>
       )
  }
}

export default App
