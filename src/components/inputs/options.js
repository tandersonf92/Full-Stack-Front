
import { useEffect } from "react"
import styled from "styled-components"







const Option =  props => {

    useEffect(() => {
    },[])

   
    return (

                    <SingleOption>{props.genre_name}</SingleOption>

    )
}

export default Option


const SingleOption = styled.option`
width: 34.3rem;
height: 5.2rem;
`