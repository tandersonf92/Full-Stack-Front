import styled from "styled-components";


export const Button = props => {

    return (

        // <StyledButton  style={{backgroundColor:propos.backgroundColor}}>{propos.msg}</StyledButton>
        <Container>
            <ButtonSubmit 
            style={{backgroundColor:props.backgroundColor,color: props.color}}
             onClick={props.onClick}  
             type={props.type}>
                 {props.text}
             </ButtonSubmit>
        </Container>
    )
}
 const ButtonSubmit = styled.button`
width: 34.3rem;
height: 5.2rem;
margin-bottom: 2rem;
`


const Container = styled.div`
`

