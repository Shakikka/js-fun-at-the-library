function createTitle(title) {
  title: 'title';
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
  var mainCharacter = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return mainCharacter;
}

function saveReview(newReview, reviews) {
  if (reviews.indexOf(newReview) === -1) {
    reviews.push(newReview)
    } else {
  }
}

function calculatePageCount (bookTitle) {
  return bookTitle.length * 20
}

function writeBook(bookTitle, bookCharacter, genre) {
  var books = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    genre: genre,
    pageCount: calculatePageCount(bookTitle)
  }
  return books
}

function editBook(array) {
  array.pageCount = array.pageCount / 4 * 3
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
