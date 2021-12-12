//Build an html elements
// Fetching and displaying all the available books and other details in the API

document.body.innerHTML = `<div class="heading-container">
<h1>Books List</h1>
<img class="icon" src="https://media.gettyimages.com/photos/stack-of-books-picture-id157482029?s=612x612" width="50px" height="50px"alt="icon">

</div>
<div id="mainContainer" class="main-container"> </div>`;

const getData = async () => {
  try {
    const data = await fetch("https://www.anapioficeandfire.com/api/books");
    const books = await data.json();
   mainContainer.innerHTML = "";
    books.forEach((book) => {
      displayData(book);
   });
  console.log(books);
  } catch (error) {
    console.log(error);
  }
};


getData();
const displayData = (obj) => {
const authors = obj.authors.map((author) => author).join(', ');
//const charecters = getCharecters(obj.povCharacters);
  mainContainer.innerHTML += `
  <div class="container">
  <h3 class="blue">Book Name:<span>${obj.name}</span></h3>
  <p class="para blue">ISBN:<span>${obj.isbn}</span></p>
  <p class="para blue">Number of pages:<span>${obj.numberOfPages}</span></p>
  <p class="para blue">Publisher Name Address:<span>${obj.publisher}</span></p>
  <p class="para blue">Release Date:<span>${obj.released}</span></p>
  <p class="para blue">Authors:<span>${authors}</span></p>
  </div>`;
};