import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

const NavigationBar = ({setText}) => {
 
  return (
    <div>
      <Link to="/" className="Name" > Akram Assignment</Link>
      <input  type="text" placeholder="  Search Products" className="NavigationInput" onChange={(e)=>setText(e.target.value)} />
      <button className="button">Search</button>
       
    </div>
  );
};

export default NavigationBar;
