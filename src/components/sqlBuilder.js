import { Fragment } from "react"

const SqlBuild = () =>{
  return(
    <Fragment>
      <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">SQL Builder</h5>
              
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Insert SQL Command</label>
                <textarea type="text" className="form-control" id="sql-input"></textarea>
              </div>
              <div className="form-group">
                <label>Output</label>
                <textarea type="text" className="form-control" id="sql-output"></textarea>
              </div>
            </div>
            
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-primary"
                data-dismiss="modal"
                >Save changes</button>
            </div> 
          </div>      
        </div>
    </Fragment>
  )
}

export default SqlBuild