function Dice(){ //random number genreator
    let ran_number =Math.floor(Math.random()*6)+1
    return ran_number
}
    let img = document.querySelectorAll("img")
    let btn = document.querySelectorAll(".btn")
    let msg = document.querySelector(".msg")
    let winner = document.querySelector(".player")
     
    
    for(let i=0;i<btn.length;i++){
    
      
        btn[i].addEventListener("click",()=>{
      
            
            let dice_roll = "images/" + "dice" + Dice() + ".png"
            img[i].setAttribute("src",dice_roll)
           
            
        
        if (i === 0) {
            msg.innerHTML = "Player Two Turn ";
    } else {
            msg.innerHTML = "Player One Turn ";
        }
        
       
    })
    
    }
    
  