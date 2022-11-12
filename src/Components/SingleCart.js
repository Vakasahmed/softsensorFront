import React from 'react';
import {useCart} from 'react-use-cart';


function SingleCart(props) {

  const {addItem} = useCart();

 const show =()=>{
  alert("Your item added")
 }

  return (
    <div className="cart">
    <h4>{props.category}</h4>
    <img src={props.img} alt="shirt" />
   <div>
   <div className='low'><h4>{props.title}</h4>
    <div className='desc'>{props.description}</div>
    <p>Cost: &#x20b9;{props.price}</p>
    <button className='add-to-cart' onMouseDown={show} onClick={()=>addItem(props.detail)}>Add to Cart</button>
   </div>
   </div>
  </div>
  )
}

export default SingleCart;