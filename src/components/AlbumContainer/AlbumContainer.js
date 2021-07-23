

import styled from 'styled-components'



const AlbumContainer = props => {

    return(
        <BodyContainer>

           <ImageBox src={props.albumCover}></ImageBox>
           <AlbumTitle>{props.albumName}</AlbumTitle>
           <Button onClick={props.onClick}>Ver músicas do Album</Button>

        </BodyContainer>
    )
}

// const BodyContainer = styled.div`
// `

const BodyContainer = styled.div`
background-color: blanchedalmond;
text-align: center;
width: 30rem;
margin: 2rem 4rem 1rem;
`

const ImageBox = styled.img`
width:20rem;
height: 20rem;
margin-top: 1rem;
` 


const AlbumTitle = styled.h2`
`

const Button = styled.button`
height: 3rem;
width: 20rem;
border:1px solid black;
color:white;
background-color: blue;
margin: 1rem 0;
border-radius: 1rem;
`
export default AlbumContainer