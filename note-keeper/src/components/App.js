import React,{useState} from "react"
import Header from "./Header";
import InputArea from "./InputArea";
import Notes from "./Notes"
import Footer from "./Footer";

function App() {
  const [note,setNote]=useState([])

  function addNote(inputText){
  
    setNote(prev=>{
      return [...prev,inputText]
    })
    
  }
  
  function deleteNote(id){
    setNote(prev=>{
      return prev.filter((item,index)=>{
        return index!==id
      })
    })

  }
  
  return (
    <div>
      <Header />
      
      <InputArea 
        input={addNote}
      />
      <div>
        {note.map((item,index)=>
          <Notes
            title={item.title}
            content={item.content}
            key={index}
            id={index}
            onDelete={deleteNote}
           />

        )}

      </div>
      <div className="footer">
     
      <Footer />
      </div>
     
    </div>
  );
}

export default App;
