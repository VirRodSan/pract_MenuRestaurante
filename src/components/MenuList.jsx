import { MenuItem } from "./MenuItem";
import { useEffect, useState } from "react";
import {fetchMealsByCategory } from "../api/api";
import { NavLink } from "react-router-dom";
import Loading from "@kiwicom/orbit-components/lib/Loading";
import "../styles/MenuList.css";
export default function MenuList({type}) {
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState([]);
  
  /* The `useEffect` hook in the provided code snippet is used to fetch meal data asynchronously when
  the component mounts for the first time. Here's a breakdown of what it does: */
  useEffect(() => {
    async function getMeals() {
      try {
        setIsLoading(true);
        const dataMeal = await fetchMealsByCategory(type);
        setMeals(dataMeal);
      } catch (error) {
        console.error("Error en el fetching", error);
      } finally {
        setIsLoading(false);
      }
    }
    getMeals();
  }, [type]);

  if (isLoading) {
    return <Loading title="Loading" />;
  }

  return (
    <section className="sectionMeals">
      <ul className="listMeals">
        {meals.map((item) => (
          <NavLink
            to={`${item.idMeal}`}
            key={item.idMeal}
          >
          <MenuItem
            key={item.idMeal}
            strMeal={item.strMeal}
            strMealThumb={item.strMealThumb}
            strMealPrice={"12 €"}
          />
          </NavLink>
        ))}
       
      </ul>
    </section>
  );
}
