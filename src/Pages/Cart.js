import React from "react";
import { useCart } from "react-use-cart";

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <h1>Your Cart is empty</h1>;

  return (
    <div className="add-cart">
   <div className="items">
   <table>
    <tbody>
      {items.map((e,i)=>{
        return(
          <tr key={i}>
          <td>
            <img className="logo" src={e.image} alt="singleItem"/>
          </td>
          <td>{e.title}</td>
          <td>Cost:<br/> &#x20b9;{e.price}</td>
          <td>Quantity:{e.quantity}</td>
          <td>
            <button className="op-btn" onClick={()=> updateItemQuantity(e.id, e.quantity + 1)}>+</button>
            <button className="op-btn" onClick={()=> updateItemQuantity(e.id, e.quantity - 1)}>-</button>
            <button className="rm-btn" onClick={()=> removeItem(e.id)}>Remove</button>
          </td>
         
          </tr>
          
        )
      })}
      </tbody>
    </table>
   </div>
<div className="total">
<h3>Total Price: &#x20b9;{cartTotal}</h3>
      <h3>
        Cart: {totalUniqueItems} total items: {totalItems}
      </h3>
</div>
    </div>
  );
}

export default Cart;
