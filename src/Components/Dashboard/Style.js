import styled from "styled-components";
import img from '../../assets/img/info.svg'

export const DashC1 = styled.div`

display: inline-flex;
height: 300px;
width: 650px;
background-color: #ffff;
margin-left: 1%;
margin-right: 2%;
margin-top: 3%;
border-radius: 10px;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

@media (max-width: 1337px) {
    display: block;
    margin:auto;
}

`

export const DashC2 = styled.div`

display: inline-flex;
height: 300px;
width: 650px;
background-color: #ffff;
border-radius: 10px;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

@media (max-width: 1337px) {
    display: block;
    margin:auto;
    margin-top: 1%;
}

`

export const Title1 = styled.div`
color: #5D405C;
margin-left: 4%;
margin-top: 3%;
display: inline-flex;
`

export const Info = styled.div`
background-image: url(${img});
display: inline-flex;
background-repeat: no-repeat;
height: 30px;
width: 20px;
position: relative;
top: 7%;
left: 4%;
cursor: pointer;
`

export const Barra = styled.div`
display:block;
margin-top: 4%;
margin-left: -10%;

@media (max-width: 1337px) {
    width: 50%;
    margin-top: -2%;
    margin-left: -1%;
}

@media (max-width: 652px) {
    width: 38%;
    margin-top: -2%;
    margin-left: -1%;
}

`

export const Scatter = styled.div`
display:block;
margin-top: 4%;
margin-left: -10%;

@media (max-width: 1337px) {
    width: 50%;
    margin-top: -1%;
    margin-left: -1%;
}

@media (max-width: 652px) {
    width: 40%;
    margin-top: -2%;
    margin-left: -1%;
}
`