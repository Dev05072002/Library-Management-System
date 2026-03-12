function addBook(){

let title=document.getElementById("title").value;
let author=document.getElementById("author").value;
let isbn=document.getElementById("isbn").value;

let books=JSON.parse(localStorage.getItem("books")) || [];

books.push({
title:title,
author:author,
isbn:isbn,
available:true
});

localStorage.setItem("books",JSON.stringify(books));

alert("Book Added");

}