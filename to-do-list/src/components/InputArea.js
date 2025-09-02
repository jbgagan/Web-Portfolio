import React,{useState} from "react"

function InputArea(props){ 
    const [input,setInput]= useState("")

    
        function changeHandler(event){
    setInput(event.target.value)
  }
  return(
<div className="form">
      <input onChange={changeHandler} type="text" placeholder="to-do" value={input} />
      <button onClick={()=>{props.buttonHandler(input); setInput("")}}>
        <span>Add</span>
      </button>
      </div> 


    )}
    

    


export default InputArea