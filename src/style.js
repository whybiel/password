import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Inter Tight', sans-serif;
    }
    body{
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-color:hsla(0,100%,50%,1);
        background-image:
        radial-gradient(at 40% 6%, hsla(25,97%,50%,1) 0px, transparent 50%),
        radial-gradient(at 84% 28%, hsla(189,100%,56%,1) 0px, transparent 50%),
        radial-gradient(at 6% 64%, hsla(355,88%,49%,1) 0px, transparent 50%),
        radial-gradient(at 46% 45%, hsla(340,100%,76%,1) 0px, transparent 50%),
        radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
        radial-gradient(at 92% 87%, hsla(240,90%,47%,1) 0px, transparent 50%),
        radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%);
    }
`

export const Container = styled.section`
    width: 100%;
    height: 100vh;

    display:flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

export const Box = styled.section`
    width: 50%;
    height: 60vh;

    background-color: #f5f5f5;
    border-radius: 30px;
    margin:0 auto;

    display:flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;

    @media (max-width:768px) {
        width: 85%;
        height: 70vh;
    }
`

export const P = styled.p`
    font-size: 30px;
    margin-bottom: 3vh;
    text-align: center;
`

export const Sucess = styled.img`
    width: 10vw;

    @media (max-width:768px) {
        width: 20vw;
    }
`

export const AlignBox = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    font-size: 30px;
    margin: 5vh 0 2vh 0;
`

export const DisplayBox = styled.div`
    display: flex;
`

export const Input = styled.input`
    width:17vw;
    height: 4.5vh;
    outline: none;
    padding-left: 10px;

    border-radius: 5px;
    border: 1px solid #000;

    @media (max-width:768px) {
        width: 50vw;
        height: 5vh;
    }
`

export const View = styled.button`
    width: 3vw;
    height: 4.5vh;
    cursor: pointer;

    @media (max-width:768px) {
        width: 8vw;
        height: 5vh;
    }
`

export const Eye = styled.img`
    width: 20px;
    height: 20px;
`

export const SubTitle = styled.h4`
    font-size: 20px;
    margin: 5vh 0 2vh 0;
`

export const BtnConfirm = styled.button`
    width:10vw;
    height: 5vh;

    background-color: transparent;
    border-radius: 10px;
    border:none;

    margin:7vh 0 2vh 0;

    transition: 1s;
    cursor: pointer;
    font-size:18px;

    &:hover{
        background-color:hsla(0,100%,50%,1);
        background-image:
        radial-gradient(at 40% 6%, hsla(25,97%,50%,1) 0px, transparent 50%),
        radial-gradient(at 84% 28%, hsla(189,100%,56%,1) 0px, transparent 50%),
        radial-gradient(at 6% 64%, hsla(355,88%,49%,1) 0px, transparent 50%),
        radial-gradient(at 46% 45%, hsla(340,100%,76%,1) 0px, transparent 50%),
        radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
        radial-gradient(at 92% 87%, hsla(240,90%,47%,1) 0px, transparent 50%),
        radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%);

        color: #fff;
    }

    @media (max-width:768px) {
        width: 50vw;
        height: 5vh;
    }
`
