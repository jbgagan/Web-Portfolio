
function Buttons(props){

    const buttons=[
        "C","/","*","-",
        "+","%","7","8",
        "9","4","5","6",
        "1","2","3",".",
        "0","=","x"

    ]

    return(
        <div className="btn-grid">
            

        {buttons.map((btn,index)=>(
            <button className="btn" onClick={()=> props.clickHandler(btn)} key={index}>{btn}</button>
        ))}
        </div>
        

    )
}
export default Buttons