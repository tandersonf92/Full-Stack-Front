






import axios from "axios";
import { BASE_URL } from '../constants/baseUrl'



const createMusicAlbumOrGenre = async (finalUrl,body, evt, history) => {
    try {
        evt.preventDefault()

        const response = await axios.post(`${BASE_URL}music/${finalUrl}`, body)
        console.log('response: ', response)
    } catch (error) {
        console.log('error: ', error.response)
    }
}


export default createMusicAlbumOrGenre