import React, { useState } from 'react'

function AddProductForm({products, setProducts}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newCard = {
            title,
            description,
            image,
            price
        }
        setProducts([...products, newCard]);
        setTitle("");
        setDescription('');
        setImage('');
        setPrice("");
       
    }
  return (
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" value={description}  onChange={(e) => setDescription(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Image</label>
    <input type="text" value={image}  onChange={(e) => setImage(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
    <input type="text" value={price}  onChange={(e) => setPrice(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" onClick={onSubmitHandler} className="btn btn-primary">Submit</button>
</form>
  )
}

export default AddProductForm
