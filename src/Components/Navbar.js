import React from "react";
import '../App.css';
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {

  const [show,setShow] = useState(false);

    return ( 
      <section style={{backgroundColor:"aquamarine",position:"relative"}}>
        <div id="Nav-maxwidth">
            <div><h1>My Shop</h1></div>
            <div id="link-div">
                <ul id="nav-links">
                    <li><Link className="links" to="/">All Products</Link></li>
                    <li><Link className="links" to="Mobiles">Mobiles</Link></li>
                    <li><Link className="links" to="Tablets">Tablets</Link></li>
                    <li><Link className="links" to="Laptops">Laptos</Link></li>
                    <li><Link className="links" to="Headphones">HeadPhones</Link></li>
                </ul>
            </div>
            <svg onClick={()=>setShow(true)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/>
            </svg>
        </div>
        {show && <div className="svg-div">
            <ul style={{listStyle:"none"}}>
                    <li><Link onClick={()=>setShow(false)} className="svg-links" to="/">All Products</Link></li>
                    <li><Link onClick={()=>setShow(false)} className="svg-links" to="Mobiles">Mobiles</Link></li>
                    <li><Link onClick={()=>setShow(false)} className="svg-links" to="Tablets">Tablets</Link></li>
                    <li><Link onClick={()=>setShow(false)} className="svg-links" to="Laptops">Laptos</Link></li>
                    <li><Link onClick={()=>setShow(false)} className="svg-links" to="Headphones">HeadPhones</Link></li>
                </ul>
         </div>}
      </section> 
    );
}

export default Navbar;