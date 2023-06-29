import React, {Fragment, useEffect, useState} from "react";
import EditForm from "./editBook"
import Add from "./addBook"

const TableBook = ({editRow}) =>{
  const [books, setBooks] = useState([])

  const getBook = async () => {
    try{
      const response = await fetch("https://tbd-backend.vercel.app/book/")
      const jsonData = await response.json()
      console.log(jsonData)
      setBooks(jsonData)

    }catch(err){
      console.error(err.message)
    }
  }

  const deleteBook = async(id) => {
    try{
      const deleteBook = await fetch(process.env.API_LINK + `book/${id}`,
      {method: "DELETE"})
      setBooks(books.filter(book => book.book_id !== id))

    }catch(err){
      console.error(err.message)
    }
  }

  useEffect(() =>{
    getBook()
  },[])
  return(
    <Fragment>
      {" "}
      <Add></Add>
      <table className="table mt-5 text-center">
        <thead className="text-center">
          <tr>
            <th>Book Title</th>
            <th>ISBN</th>
            <th>Release</th>
            <th>Pages</th>
            <th>Language</th>
            <th>Publisher</th>
            <th></th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {books && books.map(book => (
            <tr key={book?.book_id}>
              <td>{book.book_title}</td>
              <td>{book.isbn_13}</td>
              <td>{book.release_year}</td>
              <td>{book.num_pages}</td>
              <td>{book.language_name}</td>
              <td>{book.publisher_name}</td>
              <td><EditForm bookData = {book}></EditForm></td>              
              <td><button className="btn btn-danger" onClick={() => deleteBook(book.book_id)}>Delete</button></td>
            </tr>
          ))}

        </tbody>
      </table>
    </Fragment>
  )
}

export default TableBook