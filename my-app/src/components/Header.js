import React from "react"
function greeting(time){
    var color = ""
    var greet=""
    if(time<12){
        greet="Good Morning"
        color="red"
}else if(time<18){
    greet = "Good Afternoon"
    color="Green"
}else {
    greet = "Good Night"
    color = "blue"
}
return {greet,color}
}

    const {greet,color} = greeting(new Date().getHours())

function Header(){
    
    return(
        <div>
            <h1 style={{color}}>{greet}</h1>
        </div>
    )
}
export default Header