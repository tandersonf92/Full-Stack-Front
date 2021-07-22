

import styled from 'styled-components'



const AlbumContainer = props => {

    return(
        <BodyContainer>

           <ImageBox src={props.albumCover}></ImageBox>
           <AlbumTitle>{props.albumName}</AlbumTitle>
           <Button onClick={props.onClick}>Ver musicas do Album</Button>

        </BodyContainer>
    )
}

// const BodyContainer = styled.div`
// `

const BodyContainer = styled.div`
background-color: blanchedalmond;
text-align: center;
width: 30rem;
margin: 2rem 6rem 1rem;
`

const ImageBox = styled.img`
width:20rem;
height: 20rem;
` 


const AlbumTitle = styled.h2`
`

const Button = styled.button`
`
export default AlbumContainer