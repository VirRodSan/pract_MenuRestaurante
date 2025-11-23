import { useState, useEffect } from "react";
import { fetchMealById } from "../api/api";

export function useMealById(id) {
  const [currentMeal, setCurrentMeal] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMealbyId(id) {
      try {
        const data = await fetchMealById(id);
        setCurrentMeal(data.meals[0]);
      } catch (e) {
        alert(`Error en la petición ${e}`);
      } finally {
        setIsLoading(false);
      }
    }
    getMealbyId(id);
  }, [id]);
  console.log("useMealById",currentMeal)
  return {currentMeal, isLoading}
}
