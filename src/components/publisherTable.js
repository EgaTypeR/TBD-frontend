import React, {Fragment, useEffect, useState} from "react";
import EditForm from "./editPublisher"
import AddForm from "./addPublisher";

const TablePublisher = () =>{
  const [publishers, setPublishers] = useState([])

  const getPublisher = async () => {
    try{
      const response = await fetch("https://tbd-backend.vercel.app/publisher/")
      const jsonData = await response.json()
      console.log(jsonData)
      setPublishers(jsonData)

    }catch(err){
      console.error(err.message)
    }
  }

  const deletePublisher = async(id) => {
    try{
      const deletePublisher = await fetch(process.env.API_LINK + `publisher/${id}`,
      {method: "DELETE"})
      setPublishers(publishers.filter(publisher => publisher.publisher_id !== id))

    }catch(err){
      console.error(err.message)
    }
  }

  useEffect(() =>{
    getPublisher()
  },[])
  return(
    <Fragment>
      {" "}
      <AddForm></AddForm>
      <table className="table mt-5 text-center">
        <thead className="text-center">
          <tr>
            <th>Publisher</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {publishers.map(publisher => (
            <tr key={publisher?.publisher_id}>
              <td>{publisher.publisher_name}</td>
              <td><EditForm publisherData = {publisher}></EditForm></td>              
              <td><button className="btn btn-danger" onClick={() => deletePublisher(publisher.publisher_id)}>Delete</button></td>
            </tr>
          ))}

        </tbody>
      </table>
    </Fragment>
  )
}

export default TablePublisher