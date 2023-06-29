import React, {Fragment, useEffect, useState} from "react";
import EditForm from "./editLanguage"
import AddForm from "./addLanguage";

const TableBook = () =>{
  const [languages, setLanguages] = useState([])

  const getLanguage = async () => {
    try{
      const response = await fetch("https://tbd-backend.vercel.app/language/")
      const jsonData = await response.json()
      console.log(jsonData)
      setLanguages(jsonData)

    }catch(err){
      console.error(err.message)
    }
  }

  const deleteLanguage = async(id) => {
    try{
      const deleteLanguage = await fetch(`https://tbd-backend.vercel.app/language/${id}`,
      {method: "DELETE"})
      setLanguages(languages.filter(language => language.language_id !== id))

    }catch(err){
      console.error(err.message)
    }
  }

  useEffect(() =>{
    getLanguage()
  },[])
  return(
    <Fragment>
      {" "}
      <AddForm></AddForm>
      <table className="table mt-5 text-center">
        <thead className="text-center">
          <tr>
            <th>Language</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {languages.map(language => (
            <tr key={language?.language_id}>
              <td>{language.language_name}</td>
              <td><EditForm languageData = {language}></EditForm></td>              
              <td><button className="btn btn-danger" onClick={() => deleteLanguage(language.language_id)}>Delete</button></td>
            </tr>
          ))}

        </tbody>
      </table>
    </Fragment>
  )
}

export default TableBook