import React from 'react'
import { useState } from 'react'
function Card({product}) {
  const [title, setTitle] = useState(product.title);
  return (
    <div className="card" style={{width: "18rem"}}>
    <img src={product.image} className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title text-truncate ">{title}</h5>
      <p className="card-text">{product.description}</p>
      <a href="#" className="btn btn-primary" onClick={() => {setTitle('new Title')}}>Go somewhere</a>
    </div>
  </div>
  )
}

export default Card
