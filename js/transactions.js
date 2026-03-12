function issueBook(){

let isbn=document.getElementById("isbn").value;

let books=JSON.parse(localStorage.getItem("books"));

for(let i=0;i<books.length;i++)
{
if(books[i].isbn===isbn && books[i].available)
{
books[i].available=false;
alert("Book Issued");
}
}

localStorage.setItem("books",JSON.stringify(books));

}