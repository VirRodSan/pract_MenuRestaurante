import "../styles/MenuItemDetail.css"
import { useParams } from "react-router-dom";

import { useMealById } from "../hook/useMealById";
export default function MenuItemDetail() {
  const id = useParams().idMeal;
  console.log("idMeal-detail",id);

  const {currentMeal, isLoading} = useMealById(id)
  
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
        <div style={{overflow:"auto",maxHeight:"55vh"}}>
            <h1>
                {currentMeal.strMeal}
            </h1>
            <img src={currentMeal.strMealThumb} width={400} height={300} />
            <h3>How to cook</h3>
            <p>{currentMeal.strInstructions}</p>
        </div>
  );
}
