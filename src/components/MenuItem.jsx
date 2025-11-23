import "../styles/MenuItem.css"

export function MenuItem({strMeal,strMealThumb,strMealPrice}){
    return(
       
        <li className="item"> 
            <img src={strMealThumb} alt={strMeal}  width={96} height={96} />
            <div>
            <p className="strMeal">{strMeal}</p>
            <p className="price">{strMealPrice}</p>
            </div>
        </li>
    )
}
