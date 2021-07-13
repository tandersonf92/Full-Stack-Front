import styled from 'styled-components'



export const MusicContainer = props => {
  let thumbnailIndex = props.file_address.search("v=")
  let thumbnailLink=  props.file_address.slice(thumbnailIndex+2)
  let youtubeAddressVideo = `http://i1.ytimg.com/vi/${thumbnailLink}/default.jpg`
    return (
        <Body>
            <ImageBox src={youtubeAddressVideo}>
            </ImageBox>
            <Title>
                {props.title}
            </Title>
            <div>
            </div>
        </Body>

    )

}


const Body = styled.div`
display: flex;
flex-direction: column;
`

const ImageBox = styled.img`
/* background-image: ${props => `url(${props.file_address})`}; */
width: 300px;
height: 300px;
`

const Title = styled.div`
`