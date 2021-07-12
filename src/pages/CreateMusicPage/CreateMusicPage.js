import { Button } from "../../components/buttons/Button"
import { Form } from "../../components/form/Form"
import useForm from "../../hooks/useForm"
import { useHistory } from "react-router-dom"
import useRequestData from "../../hooks/useRequestData"
import allGenres from "../../functions/allGenres"
import Selected from '../../components/inputs/options'
import createMusic from '../../requests/createMusic'

import { useEffect } from "react"
import AllButtons from "../../components/TEMPORARIOS/AllButtons"
import { Input } from "../../components/inputs/Input"
import styled from "styled-components"
import useProtectedPage from "../../hooks/useProtectedPage"
const CreateMusicPage = (params) => {
    const [form, onChange] = useForm({ music_title: "", music_author: "",music_file: "",genre_id: "",album_id: "" })
    // const [genreForm,onChangeForm] =useForm({genre})
    useEffect(() => {

    }, [])
    const history = useHistory()

    useProtectedPage(history)
    const allGenres = useRequestData({}, "music/genre")
    const allAlbums = useRequestData({}, "user/albums")
    const genreOptions = allGenres.length > 0 && allGenres.map(genre => {
        return <option id={genre.genre_id} value={genre.genre_id}>{genre.genre_name}</option>
    })
    const albumOptions = allAlbums.length > 0 && allAlbums.map(album => {
        return <option id={album.album_id} value={album.album_id}>{album.album_name}</option>
    })
    useEffect(() => {

    },[])
    return (
        <div>

            <h1>createMusicPage</h1>
            <Form onSubmit ={(evt) => createMusic(form,evt,history)}>
                <Input name="music_title" onChange={onChange} placeholder="music_title" value={form.music_title}></Input>
                <Input name="music_author" onChange={onChange} placeholder="music_author" value={form.music_author}></Input>
                <Input name="music_file" onChange={onChange} placeholder="music_file" value={form.music_file}></Input>

                <Select name="album_id" onChange={onChange} placeholder="album_id" value={form.album_id}>
                    {albumOptions}
                </Select>
                <Select name="genre_id" onChange={onChange} placeholder="genre_id">
                {genreOptions} 
                </Select>
        <Button 
        text={"Create Music "}
        backgroundColor="orange"/>
            </Form>
            {/* <input name="genre" onChange={onChange} placeholder="genre" value={form.email}></input> */ }
    {/* Genre fazer com todos os types existentes, sendo adicionar 1 a 1, ou por option/seçect */ }


{/* <AllButtons/> */}
        </div >
    )
}

export default CreateMusicPage


const Select = styled.select`
width: 34.3rem;
height: 5.2rem;
border: 1px solid black;
margin-bottom: 2rem;
`