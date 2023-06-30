import React from 'react'

function AddProductForm() {
  return (
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Image</label>
    <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
    <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}

export default AddProductForm
