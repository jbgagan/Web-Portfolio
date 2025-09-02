import React,{useState} from "react"
import Todo from "./Todo"
import InputArea from "./InputArea"

function App() {
  // const [name,setName]= useState("")
  const [items,setItems]=useState([])

  // function changeHandler(event){
  
  //   setName(event.target.value)
  // }
  function buttonHandler(input){
    setItems((prevValue)=>{
    
      return [...prevValue,input]

    })
    
  }

  function deleteItem(id){
    setItems(prev=>{
      return prev.filter((item,index)=>{
        return index !==id
      })

      })
    }
    
    
  return (
    <div className="container">
      <div className="heading">
      <h1>to do list</h1>
      </div>
      {/* <div className="form">
      <input onChange={changeHandler} type="text" placeholder="to-do" value={name} />
      <button onClick={buttonHandler}><span>Add</span>
      </button>
      </div> */}
      <div>
        <InputArea 
          buttonHandler={buttonHandler}
         />
      </div>
      <div>
        {items.map((item,index)=>
          <Todo
            text={item}
            key={index}
            id={index}
            delete={deleteItem}
            
          />
        )}
      
      </div>
    </div>
  );
}


export default App;
