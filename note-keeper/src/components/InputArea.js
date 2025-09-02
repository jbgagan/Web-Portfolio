import { useState } from "react"

function InputArea(props){
    const [inputText,setInputText]=useState({
        title: "",
        content: ""
    })
    function addInput(event){
        const {name,value}=event.target
        
        setInputText(prev =>{
            return {
                ...prev,[name]:value
            }
        })
    }
     function submitNote(event){
        event.preventDefault()
        props.input(inputText)
        setInputText({
        title: "",
        content: ""
        })

    }
    return(
        <div>
            <form>
            <input name="title" placeholder="Title" onChange={addInput} value={inputText.title}></input>
            <textarea name="content" onChange={addInput}  value={inputText.content} placeholder="Take a note.." rows="3" />
            <button onClick={submitNote}>Add</button>
          </form>
        </div>
    )
}
export default InputArea