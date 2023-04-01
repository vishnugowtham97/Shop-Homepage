import React, {useState} from "react";

function Product({ item }) {
    const [cartItems, setCartItems] = useState([]);
  
    function addToCart(item) {
      setCartItems([...cartItems, item]);
    }
  
    return (
      <div>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>${item.price}</p>
        <button onClick={() => addToCart(item)}>Add to Cart</button>
        <p>{cartItems.length} items in cart</p>
      </div>
    );
  }
  export default Product;
