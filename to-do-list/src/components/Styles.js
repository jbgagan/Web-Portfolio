import React,{useState} from "react"
function Styles(){
    const [style,setStyle]=useState({textDecoration:""})
    function click(){
        setStyle({textDecoration:"line-through"})
    }
    
    return (
        <div>
            <ul>
            <li styles={style} onClick={click}></li>
            </ul>

        </div>
    )