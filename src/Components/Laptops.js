import React from "react";
import '../App.css'
import { useState } from "react";

function Laptops(props) {

    const [img,setImg] = useState()
    const [price,setPrice] = useState()
    const [width,setWidth] = useState()
    const [height,setHeight] = useState()
    const [discription,setDiscription] = useState()
    const [name,setName] = useState()
    const [showpopup,setShowpopup] = useState(false)
    const [blur,setBlur] = useState()

    return ( 
        <>
            <section>
            <div className="product-div">
                {
                    props.laptop.map((list)=>
                    <>
                        <div className="product-width" id={blur} onClick={()=>{
                              setImg(list.Img)
                              setWidth(list.width)
                              setHeight(list.height)
                              setPrice(list.Price)
                              setName(list.Name)
                              setDiscription(list.Popup)
                              setShowpopup(true)
                              setBlur('blur')
                        }}>
                        <div className="product-container"> 
                            <img src={list.Img} width={list.width} height={list.height} />
                            <h2>{list.Name}</h2>
                        </div> 
                        </div>
                        {showpopup &&<div className="popup">
                        <div className="popup-container">
                            <img className="popupContent" id="popupimg" src={img} width={200} height={height} />
                            <div className="popupContent">
                                <h2>{name}</h2>
                                <h3>{price}</h3>
                                <p>{discription}</p>
                                <h3 className="popupclose" onClick={()=>{
                                    setShowpopup(false)
                                    setBlur('')
                                }}>x</h3>
                            </div>
                        </div>
                        </div>
                        }
                    </>
                    )
                }  
            </div>
          </section>
        </>
     );
}

export default Laptops;