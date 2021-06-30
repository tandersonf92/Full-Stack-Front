import axios from "axios";
import { BASE_URL } from '../constants/baseUrl'
import { goToLoginPage } from "../routes/coorditator";



const signup = async (body, evt, history) => {
    try {
        evt.preventDefault()
        const response = await axios.post(`${BASE_URL}user/signup`, body)
        console.log('response: ', response)
        const token = response.data.token
        window.localStorage.setItem('token', token)
        goToLoginPage(history)
    } catch (error) {
        console.log('error: ', error.response)
    }
}


export default signup