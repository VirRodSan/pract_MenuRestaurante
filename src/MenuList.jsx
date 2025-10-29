import { MenuItem } from "./MenuItem"
import { useEffect, useState } from "react"
import { fetchMeal} from "../api/api"
import Loading from "@kiwicom/orbit-components/lib/Loading"
import "./MenuList.css"
export default function MenuList(){

  const [isLoading,setIsLoading] = useState(true)
  const [meals, setMeals]=useState([])
  
  useEffect(()=>{
      
      async function getMeals() {
        try{
          setIsLoading(true)
          const dataMeal = await fetchMeal()
          setMeals(dataMeal)
        }catch(error){
          console.error("Error en el fetching",error)
        }finally{
          setIsLoading(false)
        }
        
      }
      getMeals()
  },[])

  if(isLoading){
    return(<Loading title="Loading" />)
  }

  return(
    <section className="sectionMeals">
      <h2 className="fish">Pescados</h2>
        <ul className="listMeals">
        {meals.map((item)=>(
          <MenuItem
            key = {item.idMeal}
            strMeal = {item.strMeal}
            strMealThumb = {item.strMealThumb}
            strMealPrice = '12 €' 
          />
        )) }
        </ul>
    </section> 
  )
}



