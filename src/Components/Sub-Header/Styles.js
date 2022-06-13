import styled from "styled-components";
import img from '../../assets/img/Filter.svg'
<link href="https://fonts.googleapis.com/css2?family=Baloo+Da+2&family=Montserrat:wght@100&family=Nanum+Gothic&display=swap" rel="stylesheet"></link>




export const Title = styled.h1`

font-family: 'Montserrat', sans-serif;
margin-top: 2%;
margin-left: 2%;
font-size: 1em;
color: #5D405C;
`

export const filter = styled.div`
display: inline-block;
background: #5D405C;
border-radius: 10px;
width: 100px;
height: 40px;
margin-left: 90%;

@media (max-width: 900px) {
    margin-left: 80%;
}

`

export const Filtro = styled.div`
    background-image: url(${img});
    height: 15px;
    width: 15px;
    background-repeat: no-repeat;
    background-size: 100%;
    margin-top: 12%;
    margin-left 10%;
    display:inline-block;
    cursor: pointer;
`

export const Filtrar = styled.div`
margin-left: 150%;
color: white;
cursor: pointer;
`