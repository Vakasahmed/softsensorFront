import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";


function Header() {

  const [name, setName] = useState("Cart");
  const navigate = useNavigate("none");

  const add = () =>{
    if(name === "Cart"){
  navigate("/cart");
    setName("Back")
    }
    else if(name === "Back"){
      setName("Cart")
      navigate("/")
    }
  }
    

  return (
    <div className='header flex'>
        <div>
        <h2>WELCOME TO OUR WEBSITE</h2>
        </div>
        <button className='btn-back' onClick={add}>{name}</button>
    </div>
  )
}

export default Header;