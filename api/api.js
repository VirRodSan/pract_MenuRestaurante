export async function fetchMeal() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')

    if(!response.ok){
        throw new Error('Network response not ok')
    }

    const data = await response.json()
    return data.meals
}