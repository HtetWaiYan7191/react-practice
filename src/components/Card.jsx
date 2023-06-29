import React from 'react'
import { useState } from 'react'
function Card({product}) {
  const [title, setTitle] = useState(product.title);
  const [showPrice, setShowPrice] = useState('Hide Price');
  const [productPrice, setProductPrice] = useState(product.price);
  const [input, setInput] = useState('');

  const hidePrice = () => {
    setShowPrice(showPrice === 'Show Price' ? 'Hide Price' : 'Show Price');
    setProductPrice(showPrice === 'Show Price' ? product.price : '');
  };

  const changeTitle = (event) => {
    setInput(event.target.value)
    setTitle(event.target.value)
  }
  

  return (
    <div className="card" style={{width: "18rem"}}>
    <img src={product.image} className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title text-truncate ">{title}</h5>
      <p className="card-text">{product.description}</p>
      <div className="d-flex justify-content-between">
      <a href="#" className="btn btn-primary" onClick={hidePrice} >{showPrice}</a>
      <span className='btn text-end'>{productPrice}</span>
      </div>
      <input type="text" onChange={changeTitle} value={input} placeholder='Change Title' className='form-control my-3' />
      
    </div>
  </div>
  )
}

export default Card
