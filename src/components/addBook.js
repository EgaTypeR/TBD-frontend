import React, {Fragment, useState, useEffect} from "react";


const AddForm = () =>{
  const [book, setBook] = useState({
    book_title : "",
    isbn_13 : "",
    release_year : "",
    num_pages : "",
    publisher_name : "erlangga",
    language_name : "English"
  }
 
  )
  const handleChange = (e) => {
    setBook({ ...book, [e.target.id]: e.target.value });
  };

  const handleClose = () =>{
    setBook(
      {
        book_title : "",
        isbn_13 : "",
        release_year : "",
        num_pages : "",
        publisher_name : "erlangga",
        language_name : "English"
      }
    )
  }

  const addBook = async(e) =>{
    e.preventDefault()
    try {
      const body = book
      const response = await fetch(`https://tbd-backend.vercel.app/book/`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      handleClose()
      window.location = "/"
    } catch (error) {
      console.error(error)
    }
  }

  const [languages, setLanguage] = useState([])

  const getLanguage = async () => {
    try{
      const response = await fetch("https://tbd-backend.vercel.app/language")
      const jsonData = await response.json()
      setLanguage(jsonData)
    }catch(err){
      console.error(err.message)
    }
  }

  const [publishers, setPublisher] = useState([])

  const getPublisher = async () => {
    try{
      const response = await fetch( "https://tbd-backend.vercel.app/publisher")
      const jsonData = await response.json()
      setPublisher(jsonData)
    }catch(err){
      console.error(err.message)
    }
  }

  const handleA = (e) =>{
    console.log(e.target.id)
    console.log(e.target.value)
  }

  useEffect(() =>{
    getLanguage()
    getPublisher()
  },[])
  return(
    <Fragment>
      <button type="button" className="btn btn-success" data-toggle="modal" data-target="#Add-Form">
        Add
      </button>
      

      <div className="modal fade" id="Add-Form" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add Book</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
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
                <select type="text" className="form-control" id="language_name" onChange={handleChange}>
                  {languages.map(language =>(
                    <option key={language.language_id} value={language.language_name}>{language.language_name}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
              <label htmlFor="publisher_name" className="col-form-label">Publisher:</label>
                <select type="text" className="form-control" id="publisher_name" onChange={handleChange}>
                  {publishers.map(publisher =>(
                    <option key={publisher.publisher_id} value={publisher.publisher_name}>{publisher.publisher_name}</option>
                  ))}
                </select>
              </div>

              </form>
            </div>
            
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                data-dismiss="modal"
                onClick={handleClose}
                >Close</button>
              <button 
                type="button" 
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={addBook}
                >Save changes</button>
            </div> 
          </div>      
        </div>
      </div>
    </Fragment>
  )
}
  


export default AddForm