import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import AlbumContainer from "../../components/AlbumContainer/AlbumContainer"
import { MusicContainer } from "../../components/Container/MusicContainer"
import Header from "../../components/Header/Header"
import AllButtons from "../../components/TEMPORARIOS/AllButtons"
import { BASE_URL } from "../../constants/BASE_URL"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import ModalPage from "../ModalPage/ModalPage"

const HomePage = (params) => {
    const history = useHistory()
    const musics = useRequestData({}, "music/allOfUser")
    console.log('musics: ',musics)
    const albums = useRequestData({},"user/albums")
    console.log('albums: ',albums)
    useProtectedPage(history)
    const [ musicsOfAnAlbum,setMusicsOfAnAlbum] = useState([])
    useEffect(() => {

    }, [])

    const selectMusicsFromAlbum = async (album_id) => {
        console.log('album_id: ',album_id)
        const token= window.localStorage.getItem('token')
        const response = await axios.get(`${BASE_URL}music/album/${album_id}`,{
            auth: token
        })
        setMusicsOfAnAlbum(response.data.message)

// setMusicsOfAnAlbum(useRequestData({},`music/album/${album_id}`))
console.log('RESPINSE: ',response)
    }

    let selectMusics = musicsOfAnAlbum.length > 0 && musicsOfAnAlbum.map(music => {
        return <MusicContainer
            key={music.music_id}
            title={music.music_title}
            author={music.music_author}
            file_address={music.file_address}
        />
    })

    const albumsTest = albums.length>0 && albums.map(album => {
        return    <AlbumContainer
        albumName= {album.album_name}
        albumCover={album.album_cover}
        onClick={() => selectMusicsFromAlbum(album.album_id)}
        />
    
    })
    return (


        <HomePageContainer>

        <Header/>
            {/* {test ? test : <h2>loading</h2>} */}
           <FlexContainer>
           {albums? albumsTest : <h2>loading os albunssss</h2>}


           </FlexContainer>
           {selectMusics ? selectMusics :  <MusicContainer
            key={"19"}
            message={"Nenhum Album selecionado ou sem músicas disponíveis"}
        />}

            <ModalPage />
            {/* <AllButtons /> */}
        </HomePageContainer>
    )
}


export default HomePage


const HomePageContainer= styled.div`
width:max(380px,80vw);
margin: auto;
/* background-color: orange; */

`


const FlexContainer = styled.div`
display:flex;
/* background-color: orange; */
flex-direction: row;
/* width: 100vw; */
flex-wrap: wrap;
justify-content: center;
`