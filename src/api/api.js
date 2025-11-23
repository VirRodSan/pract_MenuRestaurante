
const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='


export async function fetchMeal(URL) {
    const response = await fetch(URL)

    if(!response.ok){
        throw new Error('Network response not ok')
    }

    const data = await response.json()
    console.log("data api",data)
    return data
}

export async function fetchMealsByCategory(category){
    const URL = `${API_URL}${category}`
     
    const data = await fetchMeal(URL)
    
    return data.meals  || []
}

export async function fetchMealById(idMeal){
    const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    const data = await fetchMeal(URL) 
     
    return data || {}
}
