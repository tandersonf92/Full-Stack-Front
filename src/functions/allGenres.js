import axios from "axios"
import { BASE_URL } from "../constants/BASE_URL"

const allGenres = async ()=> {
 const response = await axios.get(`${BASE_URL}music/genre`) 
 return response.data
}

export default allGenres


