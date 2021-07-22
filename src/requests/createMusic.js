import axios from "axios";
import { BASE_URL } from '../constants/BASE_URL'
import { goToHomePage, goToLoginPage } from "../routes/coordinator";



const createMusic = async (body, evt, history) => {
    try {
        evt.preventDefault()
        const token = localStorage.getItem('token')
        // console.log('token: ', token)
        // title, file , genresIds e albumId
        const response = await axios.post(`${BASE_URL}music/createMusic`,
            body, {
            headers: { authorization: token }
        })
        if (!body.album_id || !body.genre_id) {
            alert("Falta dados!")
        } else {

            alert("Music created!")
            goToHomePage(history)
        }

    } catch (error) {
        alert('error: ', error.response)
    }
}


export default createMusic