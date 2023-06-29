import React from 'react'

function Card({product}) {
  return (
    <div className="card" style={{width: "18rem"}}>
    <img src={product.image} className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title text-truncate ">{product.title}</h5>
      <p className="card-text">{product.description}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  )
}

export default Card
