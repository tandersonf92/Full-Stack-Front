import useRequestData from "../../hooks/useRequestData"

function MainPage(params) {

    // const music = useRequestData({},"music/all")
    const genre = useRequestData({}, "music/genres")
    const album = useRequestData({},"music/albums")
    // console.log(music)
    console.log(genre)
    // console.log(album)
    return (

        <div>


            <button>Testando valores dos alls</button>

            <h1>MainPagegege</h1>


        </div>
    )
}


export default MainPage