import React from 'react'

function Form() {
  return (
    <div>
    <div className="container my-5 w-50">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            className="form-control"
            id="myBox"
            rows="8"
            onChange={handleUpchange}
          ></textarea>
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleUpclick}>
        convert to UPPERCASE
      </button>
    </div>
  )
}

export default Form