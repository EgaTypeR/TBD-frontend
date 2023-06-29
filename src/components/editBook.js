import React, {Fragment, useState, useContext} from "react";

const EditForm = ({bookData}) =>{
  const [book, setBook] = useState(bookData)
  const handleChange = (e) => {
    setBook({ ...book, [e.target.id]: e.target.value });
  };

  const updateBook = async(e) =>{
    e.preventDefault()
    try {
      const body = book
      const response = await fetch(`https://tbd-backend.vercel.app/book/${bookData.book_id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      window.location = "/"
    } catch (error) {
      console.error(error)
    }
  }

  return(
    <Fragment>
      <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${book.book_id}`}>
        Edit
      </button>
      

      <div className="modal fade" id={`id${book.book_id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content" onClick={()=> setBook(book)}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Book</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setBook(bookData)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="text-left">
              <div className="form-group">
                <label>Book Title:</label>
                <input type="text" className="form-control" id="book_title" value={book.book_title} onChange={handleChange}></input>
              </div>
              <div className="form-group">
                <label htmlFor="isbn_13" className="col-form-label">ISBN:</label>
                <input type="text" className="form-control" id="isbn_13" value={book.isbn_13} onChange={handleChange}></input>
              </div>
              <div className="form-group">
                <label htmlFor="release_year" className="col-form-label">Release:</label>
                <input type="text" className="form-control" id="release_year" value={book.release_year} onChange={handleChange}></input>
              </div>
              <div className="form-group">
                <label htmlFor="num_pages" className="col-form-label">Pages:</label>
                <input type="text" className="form-control" id="num_pages" value={book.num_pages} onChange={handleChange}></input>
              </div>
              <div className="form-group">
                <label htmlFor="language_name" className="col-form-label">Language:</label>
                <input type="text" className="form-control" id="language_name" value={book.language_name} onChange={handleChange}></input>
              </div> 
              <div className="form-group">
                <label htmlFor="publisher_name" className="col-form-label">Publisher:</label>
                <input type="text" className="form-control" id="publisher_name" value={book.publisher_name} onChange={handleChange}></input>
              </div>
              </form>
            </div>
            
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                data-dismiss="modal"
                onClick={() => setBook(bookData)}
                >Close</button>
              <button 
                type="button" 
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={updateBook}
                >Save changes</button>
            </div> 
          </div>      
        </div>
      </div>
    </Fragment>
  )
}
  


export default EditForm