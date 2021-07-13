import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { MusicContainer } from "../../components/Container/MusicContainer"
import AllButtons from "../../components/TEMPORARIOS/AllButtons"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import ModalPage from "../ModalPage/ModalPage"

const HomePage = (params) => {
    const history = useHistory()
    const musics = useRequestData({}, "music/allOfUser")
    useProtectedPage(history)
    useEffect(() => {

    }, [])

    let test = musics.length > 0 && musics.map(music => {
        return <MusicContainer
            key={music.music_id}
            title={music.title}
            file_address={music.file_address}
        />
    })
    return (


        <div>


            <button>Testando valores dos alls</button>

            <h1>HomePagegege</h1>
            {test ? test : <h2>loading</h2>}

            <ModalPage />
            <AllButtons />
        </div>
    )
}


export default HomePage