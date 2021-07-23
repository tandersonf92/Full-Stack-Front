import styled from 'styled-components'



export const MusicContainer = props => {
    //   let thumbnailIndex = props.file_address.search("v=")
    //   let thumbnailLink=  props.file_address.slice(thumbnailIndex+2)
    //   let youtubeAddressVideo = `http://i1.ytimg.com/vi/${thumbnailLink}/default.jpg`
    return (
        <Body>
            {/* <ImageBox src={youtubeAddressVideo}> */}
            {/* </ImageBox> */}
            {
                props.title ?
                    <MusicInfo>
                        <TitleContainer>{props.title} -</TitleContainer>
                        <AuthorContainer> {props.author}</AuthorContainer>
                    </MusicInfo>
                    :
                    <MusicInfo>
                        <TitleContainer> {props.message} </TitleContainer>
                    </MusicInfo>
            }
            {/* <MusicInfo>
                {
                    props.author
                }
            </MusicInfo> */}
            <div>
            </div>
        </Body>

    )

}


const Body = styled.div`
display: flex;
flex-direction: column;
background-color: #262463;
color:white;
`

const ImageBox = styled.img`
/* background-image: ${props => `url(${props.file_address})`}; */
width: 300px;
height: 300px;
`

const MusicInfo = styled.div`
font-size: 3rem;
display: flex;
justify-content: center;
flex-wrap: wrap;
border:1px solid white;
`
const TitleContainer = styled.div`
text-align:center;
`
const AuthorContainer = styled(TitleContainer)``