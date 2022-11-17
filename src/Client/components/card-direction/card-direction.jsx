import "./card-direction.css"
const CardDirection=({title,description})=>{

    return(
        <div className="container-card_direction">
            <h2>{title}</h2>
            <input placeholder={description}></input>  
            
        </div>
        
   )
}

export default CardDirection;