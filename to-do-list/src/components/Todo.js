//import React,{useState} from "react"
function Todo(props){
    //  const [style,setStyle]=useState({
    //     textDecoration:"",
    //     textDecorationColor:""

    //  })
    //const [isDone,SetisDone]=useState(false)
        // function click(){
        //     // setStyle({
        //     //     textDecoration:"line-through",
        //     //     textDecorationColor:"red"

        //     // })
        //     // SetisDone((prev)=> !prev) //toggle strike
        //     props.delete(props.id)
        // }
    
    return (
        <div onClick={() =>props.delete(props.id)}> 
     {/* <li onClick={click}
        style={{textDecoration: isDone ? "line-through":"none"}}> {props.text} */}
        <li >{props.text}

        </li>
        </div>
        
       
    )
}
export default Todo