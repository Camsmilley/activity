import './Card.css'
function Card(){
    return(
        <>
   
  <div className="card ">
  <img className = "card-image" src="img/card.jpg" alt="..."/>
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
        </>
    )
}

export default Card;