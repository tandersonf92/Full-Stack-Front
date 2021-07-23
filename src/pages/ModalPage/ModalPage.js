import { useState } from "react"
import styled from "styled-components"



const ModalPage = () => {


    // let [autoplay,setAutoplay] = useState(true)

    // const changeAutoplayValue = (evt) => {
    //     if(autoplay){
    //         // setAutoplay("1")
    //         evt.target.playVideo()
    //         setAutoplay(!autoplay)
    //     }else{
    //         // setAutoplay("0")
    //         evt.target.pauseVideo()
    //         setAutoplay(!autoplay)
    //     }
    // }

return(
    <ModalContainer>
        <CenteredContainer>
        <CloseModal>
          x
        </CloseModal>
       <ContentBox>
           <h3>Title</h3>
           <h4>Author</h4>
           <h4>Album name</h4>
           <h6>Adicionado em :</h6>
       </ContentBox>
       {/* <Iframe class="youtube-player" id="player" type="text/html" src={`http://www.youtube.com/embed/JW5meKfy3fY?wmode=opaque&autohide=1&autoplay=0&enablejsapi=1`} frameborder="0" onClick={(evt)=>changeAutoplayValue(evt)}>&lt;br /&gt;</Iframe> */}
       
       {/* <button onClick={(evt)=>changeAutoplayValue(evt)}>TESTEEEEEEEEEEEEEEEEEEEe</button> */}
        </CenteredContainer>
    </ModalContainer>
)

}


const ModalContainer = styled.div`
background-color: black;
width: 100vw;
height: 100vh;
position:absolute;
top:0;
/* opacity: 0.2; */
display: flex;
justify-content: center;
align-items: center;
font-size: 3rem;
visibility: hidden;
`
const CenteredContainer = styled.div`
width: 50vw;
height: 50vh;
background-color: green;
position: relative;
/* display: flex; */
/* justify-content: center; */
/* align-items: center; */
`

const CloseModal = styled.div`
font-size: 50px;
position: absolute;
/* top:0; */
right: 0;
/* text-align: end; */
display: flex;
/* align-items: center; */
/* flex-direction:column; */
/* justify-content: end; */
width: 30px;
background-color: orange;
`

const ContentBox = styled.div`
width: 100%;
/* background-color: palegoldenrod; */
height: 100%;
/* text-align: center; */
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Iframe = styled.iframe`
width: 100px;
/* height: 10px; */
`

export default ModalPage