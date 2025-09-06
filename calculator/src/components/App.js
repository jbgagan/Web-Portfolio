import {useState} from "react"
import Buttons from "./Buttons";
import Display from "./Display";
import {evaluate} from "mathjs"
 import "./App.css"


function App(){

    const[expression,setExpression]=useState("");
    const[result,setResult]=useState("")
    

    function eventHandler(newValue){
        setExpression(newValue)
    }

    function clickHandler(btn){
        setExpression((prev)=>(
            prev + btn
        ))
        if(btn==="C"){
            setExpression("")

        }
        
    }
    // function mathHandler(){

    // }
    
    return (
        <div className="app">
            <Display 
               
                expression={expression}
                eventHandler={eventHandler}
                // result={result}
    
             />
              <Buttons 
               clickHandler={clickHandler}
               
              />
              <Cal
              expression={expression}
              
              />
              
             
        </div>


    )
}
export default App;