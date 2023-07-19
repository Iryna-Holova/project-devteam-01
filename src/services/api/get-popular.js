import axios from 'axios';
import { BASE_URL } from './recipes-api/common';

axios.defaults.baseURL = BASE_URL;
export const getPopularRecipe=async()=>{
    try {
        const{data}=await axios.get('/api/recipes/popular');
        return data;
        
    } catch (error) {
        console.log(error);
        throw error;
    }
};