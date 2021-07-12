import axios from "axios";
import { BASE_URL } from '../constants/BASE_URL'
import { goToHomePage } from "../routes/coordinator";



const loginOrSignUp = async (body, evt, history,finalUrl) => {
    try {
        evt.preventDefault()
        const response = await axios.post(`${BASE_URL}${finalUrl}`, body)
        console.log('response: ', response)
        const token = response.data.token

        if(!token){
            return(alert("Usuario invalido"))
        }
        window.localStorage.setItem('token', token)
        goToHomePage(history)
    } catch (error) {
        console.log('error: ', error.response)
    }
}


export default loginOrSignUp