$(".submit").click(function () {
  var error = validate()
  if (error){ // meaning if there is no text added in the input labels .
    alert(error) // returns the Error which is the errors implemented in the if  statements
  } else { // if condition is met , it will invoke the function addbook()
    addBook();
  }
});
// we assigned the element ID'S to variables.
function validate() {
  var book_name = $("#book_name")
  var genre = $("#genre")
  var author_name = $("#author_name")
  var release_date = $("#release_date")

  if (
    book_name.val() == "" &&
    genre.val() == "" &&
    author_name.val() == "" &&
    release_date.val() == ""
  ) {
    return "Please fill in the input boxes";
  } else if (book_name.val() == "") {
    return "Please insert an book name";
  } else if (genre.val() == "") {
    return "Please write a genre for your book";
  } else if (author_name.val() == "") {
    return "Please define an author for your book";
  } else if (release_date.val() == "") {
    return "Please enter a valid release date";
  }

  return false; // if you're wondering why return false; because if we put return true, there first condition in function will be met so it will result the error message.
}

// this function allows us to create and add books in our table.
function addBook() {
  var book_name = $("#book_name")
  var genre = $("#genre")
  var author_name = $("#author_name")
  var release_date = $("#release_date")

  var newRow = document.createElement("tr");
  var rowId = $("tbody").children().length; // check length of the tbody
  newRow.id = "row_" + rowId; // each time we add a book , the row id will be incremented by 1

  var newBookcolumn = document.createElement("td");
  newBookcolumn.innerText = book_name.val()
  newRow.appendChild(newBookcolumn);
  //
  var newBookcolumn = document.createElement("td");
  newBookcolumn.innerText = genre.val()
  newRow.appendChild(newBookcolumn);
  //
  var newBookcolumn = document.createElement("td");
  newBookcolumn.innerText = author_name.val()
  newRow.appendChild(newBookcolumn);
  //
  var newBookcolumn = document.createElement("td");
  newBookcolumn.innerText = release_date.val()
  newRow.appendChild(newBookcolumn);

  var newBookcolumn = document.createElement("td");
  // 
  newBookcolumn.innerHTML = `<button onClick="deleteBook('#row_${rowId}')">Delete</button>`;
  newRow.appendChild(newBookcolumn);

  $("tbody").append(newRow);
  alert("Book is successfully been added");
// everytime a new book is added , the input boxes will be empty.
  book_name.val("");
  genre.val("");
  author_name.val("");
  release_date.val("");
}
// this is a function to delete books , as for ID, it refers to newRow id.
function deleteBook(id) {
  $(id).remove();
  alert("Book is successfully removed");
}