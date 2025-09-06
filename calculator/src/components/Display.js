

function Display(props){

    return(
        
    

        <div className="display" 
        tabIndex={0} 
        onKeyDown={(e)=>props.eventHandler(e.key)}>
            {/* <input onChange={(e)=>props.eventHandler(e.target.value)} value={props.expression} type="text"></input>  */}

            <div className="expression">{props.expression || "0"}</div>


        </div>
    


    )
}
export default Display