import axios from "axios";

// TODO: refactor baseURL code (remove duplicates)
// TODO: getting 2/4 recipes for tablet and desktop

axios.defaults.baseURL = "https://so-yummi.onrender.com/"

export const getRecipesMainAPI = async () => {
    const urlToGetRecipes = new URL("https://so-yummi.onrender.com/api/recipes/main-page");
    urlToGetRecipes.searchParams.append('limit', 1);
    try {
        const res = await axios.get(urlToGetRecipes)
        return res.data;
    } catch (e) {
        console.log(e.message)    
    }
}
