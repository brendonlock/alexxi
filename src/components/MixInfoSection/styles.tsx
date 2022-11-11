import styled from 'styled-components';

export const Container = styled.div`
    width: 100%
    display: flex; 
`

export const BackgroundImg = styled.div`
    /* background: url('/Alexxi-Presskit/Photo_Jul_6,_10_43_18_PM.jpg'); */
    /* background: url('/images/mix-example.jpg'); */
    /* background-repeat: no-repeat; */
    /* background-position: center; */
    /* background-size: cover; */
    background-color: #171d20;
    height: 100vh;

    @media screen and (max-width: 768px) {
        height: 400px;
    }
`

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 50px;
    font-weight: 700;

    @media screen and (max-width: 768px) {
        font-size: 25px;
    }
`