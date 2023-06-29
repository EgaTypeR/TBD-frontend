import React, {Fragment, useState} from "react";

const AddForm = () =>{
  const [publisher, setPublisher] = useState({
    publisher_name:""
  })
  const handleChange = (e) => {
    setPublisher({ ...publisher, [e.target.id]: e.target.value });
  };

  const updatePublisher = async(e) =>{
    e.preventDefault()
    try {
      const body = publisher
      const response = await fetch( `https://tbd-backend.vercel.app/publisher/`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      window.location = "/publisher"
    } catch (error) {
      console.error(error)
    }
  }

  return(
    <Fragment>
      <button type="button" className="btn btn-success" data-toggle="modal" data-target={`#addForm`}>
        Add
      </button>
      

      <div className="modal fade" id={`addForm`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content" onClick={()=> setPublisher(publisher)}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add publisher</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setPublisher([])}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="text-left">
              <div className="form-group">
                <label>publisher:</label>
                <input type="text" className="form-control" id="publisher_name" value={publisher.publisher_name} onChange={handleChange}></input>
              </div>
              </form>
            </div>
            
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                data-dismiss="modal"
                onClick={() => setPublisher([])}
                >Close</button>
              <button 
                type="button" 
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={updatePublisher}
                >Save changes</button>
            </div> 
          </div>      
        </div>
      </div>
    </Fragment>
  )
}
  


export default AddForm