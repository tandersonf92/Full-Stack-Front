import { useHistory } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import '../../App.css';
import TelaInicial from '../../components/TelaInicial/TelaInicial';
import { Container } from '../../components/Container/Container';



const LoadingPage = () => {
    const history = useHistory()
    const token = localStorage.getItem("token");
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            token ? history.push("/home") : history.push("/login")
            // history.push("/signup")
        }, 2000)
    }, [token,history])


    return (
        <Container>

            <TelaInicial />
        </Container>

    );
}

export default LoadingPage;
