# React Project MyReads

This is a book tracking application that allows you to select and categorize books you have read,
are currently reading, or want to read.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
1. First you need to download and install [Node.js® and npm](https://nodejs.org).
2. Then follow [these instructions](https://www.npmjs.com/get-npm) to check that Node.js and npm are installed and to get the latest version of npm.

### Installing & running
1. Download this repository and unzip it.
2. Open your command-line and enter the unzipped directory.
3. Run this command to open the application in your default browser:
```
npm run start
```

## Remarks
* Due to the nature of the backend server, search results are capped at 20.
* The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results. 

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.