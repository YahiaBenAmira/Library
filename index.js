var array = [];


$(".submit").click(function () { // over here we got our add button selected by the class defined in our html file
  var error = validate()
  if (error){ // meaning if there is no text added in the input labels .
    alert(error) // returns the Error which is the errors implemented in the if  statements below.
  } else { // if condition is met , it will invoke the function addbook()
    addBook();
  }
});
function validate() {
  // we assigned the element ID'S to variables.
  var book_name = $("#book_name")
  var genre = $("#genre")
  var author_name = $("#author_name")
  var release_date = $("#release_date")
  //if(array.includes($('#book_name').val()) && array.includes($('#genre').val()) && array.includes($('#author_name').val()) && array.includes($('#release_date').val())) {
    //alert('book already exists')
    
  

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

// this function allows us to create table data and add books in them.
function addBook() {
  //  Again , we assigned the element ID'S to variables.
  var book_name = $("#book_name")
  var genre = $("#genre")
  var author_name = $("#author_name")
  var release_date = $("#release_date")
  if(array.includes($('#book_name').val()) && array.includes($('#genre').val()) && array.includes($('#author_name').val()) && array.includes($('#release_date').val())) {
    alert('book already exists')
    console.log('book already exists ya l3efrit')
    
  }else{

  var newRow = document.createElement("tr");
  var rowId = $("tbody").children().length; // check length of the tbody.children
  newRow.id = "row_" + rowId; // each time we add a book , the rowid will be incremented by 1 by each time a td inserted into the table body.

  var newBookcolumn = document.createElement("td");
  array.push(newBookcolumn.innerText = book_name.val())
  newRow.appendChild(newBookcolumn);
  //
  var newBookcolumn = document.createElement("td");
  array.push(newBookcolumn.innerText = genre.val())
  newRow.appendChild(newBookcolumn);
  //
  var newBookcolumn = document.createElement("td");
  array.push(newBookcolumn.innerText = author_name.val())
  newRow.appendChild(newBookcolumn);
  //
  var newBookcolumn = document.createElement("td");
  array.push(newBookcolumn.innerText = release_date.val())
  newRow.appendChild(newBookcolumn);

  var newBookcolumn = document.createElement("td");
  //var newBookcolumn1 = document.createElement("td");
  //
  // this will Get the HTML content of an element with the specefied id,
  newBookcolumn.innerHTML = `<button onClick="deleteBook('#row_${rowId}')">Delete</button>`;
  //newBookcolumn1.innerHTML = `<button onClick="modifyBook('#row_${rowId}')">Modify</button>`; // ${row id will give us the id value}
  newRow.appendChild(newBookcolumn);
  //newRow.appendChild(newBookcolumn1);
  $("tbody").append(newRow);
  alert("Book is successfully been added");
// everytime a new book is added , the input boxes will be empty. and an alert will be shown.
  book_name.val("");
  genre.val("");
  author_name.val("");
  release_date.val("");
}}
// this is a function to delete books , as for ID, it refers to newRow id.
function deleteBook(id) {
  $(id).remove();
  alert("Book is successfully removed");
}