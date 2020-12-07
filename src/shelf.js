function shelfBook(array, shelf) {
  if (array.genre === 'sciFi' && shelf.length < 3) {
    shelf.unshift(array)
  } else {
    }
}

function unshelfBook(title, shelf) {
  shelf.splice(1, 1);
}
// Yes, I flubbed it, but maybe I'll get back to it.

// function unshelfBook (title, shelf) {
//   var index = shelf.indexOf(title);
//   if (index > -1) {
//     shelf.splice(index, 1);
//   }
//   return shelf
// }

function listTitles(shelf) {
  var bookList = []
  for (i = 0; i < shelf.length; i++) {
    bookList.push(shelf[i].title)
    }
    return bookList.join(', ')
}

function searchShelf(shelf, title) {
  var shelfList = [];
  for (var i = 0; i < shelf.length; i++) {
      shelfList.push(shelf[i].title)
    }
    if (shelfList.includes(title)) {
      return true
    } else {
    return false
  }
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
