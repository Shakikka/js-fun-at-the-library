function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library
}

function addBook(library, book) {
    if (book.genre === 'fantasy') {
    library.shelves.fantasy.unshift(book)
  } else if (book.genre === 'fiction') {
    library.shelves.fiction.unshift(book)
  } else if (book.genre === 'nonFiction') {
    library.shelves.nonFiction.unshift(book)
  } else{
  }
}

 function checkoutBook(library, title, genre) {
   if (genre.includes('fiction')) {
     for (var i = 0; i < library.shelves.fiction.length; i++) {
      var book = library.shelves.fiction[i];
      }
    } else if (book.title == title) {
        library.shelves.fiction.splice(indexOf(title), 1)
      } else {
      }
}
//I have no idea...please give me insight.

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
