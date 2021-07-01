import useRequestData from "../../hooks/useRequestData"

function MainPage(params) {

    const musics = useRequestData({},"music/all")
    // const genre = useRequestData({}, "music/genres")
    // const album = useRequestData({},"music/albums")
    console.log(musics)
    // console.log(genre)
    // console.log(album)


let tutu = musics.length>0 && musics.map (music  => {
  return   <h1>{music.title}</h1>
})
    return (


        <div>


            <button>Testando valores dos alls</button>

            <h1>MainPagegege</h1>
{tutu? tutu : <h2>loading</h2>}

        </div>
    )
}


export default MainPage