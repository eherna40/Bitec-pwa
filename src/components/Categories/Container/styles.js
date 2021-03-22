import styled from 'styled-components'


export const Content = styled.div`
    background-image: url('splash.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    animation-duration: 1s;
    opacity: 1;
    padding-left: 65px;
    &::after{
        background-color: rgba(0,0,0,.7);
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        content: '';
        z-index: 0;
    }
`