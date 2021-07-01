import axios from "axios";
import { BASE_URL } from '../constants/baseUrl'
import { goToHomePage } from "../routes/coorditator";



const loginOrSignUp = async (body, evt, history,finalUrl) => {
    try {
        evt.preventDefault()
        const response = await axios.post(`${BASE_URL}${finalUrl}`, body)
        console.log('response: ', response)
        const token = response.data.token
        window.localStorage.setItem('token', token)
        goToHomePage(history)
    } catch (error) {
        console.log('error: ', error.response)
    }
}


export default loginOrSignUp