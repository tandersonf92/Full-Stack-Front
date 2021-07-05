import styled from "styled-components"




export const LoginSeparator = props => {
    return (
        <MainDiv>
            <Line></Line>
            <Span>ou</Span>
            <Line></Line>
        </MainDiv>
    )

}


const MainDiv = styled.div`
display: flex;
flex-direction: row;
width: 34.3rem;
height: 5.2rem;
margin: 2rem 0 2rem;
align-items: center;
justify-content: space-around;

`

const Line = styled.div`
border-top:1px solid var(--grey);
width: 40%;
position: relative;
top:0.3rem;
`

const Span = styled.span`
font-size: 1.6rem;
margin: 0 2rem;
`
