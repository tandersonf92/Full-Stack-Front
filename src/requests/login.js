import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";
import { goToHomePage } from "../routes/coorditator";




const login = async (body, evt, history) => {
    try {
        evt.preventDefault()
        console.log('Body: ', body)
        const response = await axios.post(`${BASE_URL}user/login`, body)
        console.log('response: ', response)
        const token = response.data.token
        window.localStorage.setItem('token', token)
        if (token) {
            goToHomePage(history)
        }
    } catch (error) {
        console.log('error: ', error.response)
    }
}


export default login