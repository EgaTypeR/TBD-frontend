import React, {Fragment, useState, useContext} from "react";

const EditForm = ({languageData}) =>{
  const [language, setLanguage] = useState(languageData)
  const handleChange = (e) => {
    setLanguage({ ...language, [e.target.id]: e.target.value });
  };

  const updatelanguage = async(e) =>{
    e.preventDefault()
    try {
      const body = language
      const response = await fetch(`https://tbd-backend.vercel.app/language/${languageData.language_id}`,{
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
      <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${language.language_id}`}>
        Edit
      </button>
      

      <div className="modal fade" id={`id${language.language_id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content" onClick={()=> setLanguage(language)}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit language</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setLanguage(languageData)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="text-left">
              <div className="form-group">
                <label>Language:</label>
                <input type="text" className="form-control" id="language_name" value={language.language_name} onChange={handleChange}></input>
              </div>
              </form>
            </div>
            
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                data-dismiss="modal"
                onClick={() => setLanguage(languageData)}
                >Close</button>
              <button 
                type="button" 
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={updatelanguage}
                >Save changes</button>
            </div> 
          </div>      
        </div>
      </div>
    </Fragment>
  )
}
  


export default EditForm