import styled, { keyframes } from 'styled-components'


const fadeIn = keyframes`
  0% {
    opacity: 0;
    left: -10px;
  }
  100% {
    opacity: .1;
     left: 15px;
  }
`

export const Title = styled.div`
    opacity: 0;
    top: -40px;
    left: 15px;
    z-index: 10;
     animation: 1s ${fadeIn} ease-out;
     animation-fill-mode: forwards;
`


export const Overload = styled.div`
  position: absolute;
  height: 100%;
  width: 40px;
  right: 0;
background: rgb(255,255,255);
background: -moz-linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 97%);
background: -webkit-linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 97%);
background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 97%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ffffff",GradientType=1);

`

